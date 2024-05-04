import React, { useEffect } from "react";
import { Table, Input, Button } from "antd";
import { Select, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  setData,
  setFilteredData,
  setSelectedTags,
  setPagination,
  setAllTags,
  setSearchText,
} from "../store/potsSlice";

const MyTable = () => {
  const { data, filteredData, selectedTags, pagination, allTags, searchText } =
    useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetch(`https://dummyjson.com/posts?limit=100`);
      const data = await response.json();
      dispatch(setData(data.posts));
      dispatch(setFilteredData(data.posts));

      const tags = new Set();
      data.posts?.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
      dispatch(
        setAllTags(Array.from(tags).map((tag) => ({ value: tag, label: tag })))
      );

      // call the persisted function
      if (searchText !=="") {
        const newData = data.posts.filter((post) =>
          post.body.toLowerCase().includes(searchText.toLowerCase().trim())
        );
        dispatch(setFilteredData(newData));
      }
      if(selectedTags.length>0){
        handleChange(selectedTags);
      }
    };

    fetchAllPosts();
  }, []);

  const handlePaginationChange = (current, pageSize) => {
    dispatch(setPagination({ current, pageSize }));
  };

  const handleSearch = (e) => {
    dispatch(setSearchText(e.target.value));
    const newData = data.filter((post) =>
      post.body.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );

    dispatch(setFilteredData(newData));
    dispatch(setSelectedTags([]));
  };

  const handleTagClick = (value) => {
    const allSelected = [...selectedTags, value];
    const newFilteredData = data.filter((post) =>
      allSelected.every((tag) =>
        post.tags.some((postTag) =>
          postTag.toLowerCase().includes(tag.toLowerCase())
        )
      )
    );
    dispatch(setFilteredData(newFilteredData));

    if (selectedTags.includes(value)) {
      dispatch(setSelectedTags(selectedTags.filter((tag) => tag !== value)));
    } else {
      dispatch(setSelectedTags([...selectedTags, value]));
    }
    dispatch(setSearchText(""));
  };

  const handleChange = (selectedValues) => {
    dispatch(setSelectedTags(selectedValues));
    const newFilteredData = data.filter((post) =>
      selectedValues.every((tag) =>
        post.tags.some((postTag) =>
          postTag.toLowerCase().includes(tag.toLowerCase())
        )
      )
    );
    dispatch(setFilteredData(newFilteredData));
    dispatch(setSearchText(""));
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (title) => <div className=" text-sm font-medium">{title}</div>,
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
      render: (body) => <div className=" text-sm ">{body}</div>,
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => (
        <div className="flex gap-2 capitalize">
          {tags.map((tag) => (
            <Button
              key={tag}
              className="capitalize"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-100 p-5 rounded-2xl">
      <h1 className="text-3xl text-center mb-5 font-sans font-bold underline uppercase tracking-widest">
        Posts Data
      </h1>
      <Input.Search
        placeholder="Search by body"
        onChange={handleSearch}
        value={searchText}
        style={{ marginBottom: "10px" }}
      />
      <div>
        <Select
          mode="multiple"
          style={{ width: "100%", marginBottom: "10px" }}
          placeholder="Select tags..."
          value={selectedTags}
          onChange={handleChange}
          options={allTags}
          optionLabelProp="label"
          optionRender={(option) => (
            <Space>
              <span role="img" aria-label={option.value}>
                {option.value}
              </span>
            </Space>
          )}
        />
      </div>
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{
          ...pagination,
          total: filteredData.length,
          onChange: handlePaginationChange,
        }}
        scroll={{ x: true }} // Enable horizontal scrolling
        className="responsive-table"
      />
    </div>
  );
};

export default MyTable;
