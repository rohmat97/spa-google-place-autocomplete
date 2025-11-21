import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, AutoComplete, Spin, Alert, Space, Typography } from "antd";
import {
  setQuery,
  searchPlaces,
  clearResults,
  setSelectedPlace,
} from "../store/slices/placeSearchSlice";

const { Search } = Input;
const { Text } = Typography;

const PlaceAutocomplete = () => {
  const dispatch = useDispatch();
  const { query, results, loading, error } = useSelector(
    (state) => state.placeSearch
  );

  const [options, setOptions] = useState([]);

  // Update options when results change
  useEffect(() => {
    const newOptions = results.map((place) => ({
      value: place.name,
      label: (
        <div>
          <div>
            <strong>{place.name}</strong>
          </div>
          <div style={{ fontSize: "12px", color: "#888" }}>{place.address}</div>
        </div>
      ),
    }));
    setOptions(newOptions);
  }, [results]);

  const handleInputChange = (value) => {
    dispatch(setQuery(value));
    if (!value) {
      dispatch(clearResults());
    }
  };

  const handleSearchSubmit = (value) => {
    dispatch(setQuery(value));
    if (value.length > 2) {
      dispatch(searchPlaces(value));
    }
  };

  const handleSelect = (value) => {
    const selectedPlace = results.find((place) => place.name === value);
    if (selectedPlace) {
      dispatch(setSelectedPlace(selectedPlace));
      dispatch(setQuery(selectedPlace.name));
      console.log("Selected place:", selectedPlace);
      // In a real app, you would dispatch an action to set the selected place
      // With Google API, you might also fetch additional details about the place
    }
  };

  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }}>
        <AutoComplete
          value={query}
          options={options}
          style={{ width: "100%" }}
          onSelect={handleSelect}
          onSearch={handleInputChange}
          placeholder="Search for places..."
        >
          <Search
            placeholder="Search for places..."
            enterButton
            loading={loading}
            onSearch={handleSearchSubmit}
          />
        </AutoComplete>

        {loading && (
          <div style={{ textAlign: "center", padding: "10px" }}>
            <Spin tip="Searching places..." />
          </div>
        )}

        {error && (
          <Alert message="Error" description={error} type="error" showIcon />
        )}

        {results.length > 0 && !loading && (
          <div style={{ marginTop: "10px" }}>
            <Text>Found {results.length} results</Text>
          </div>
        )}
      </Space>
    </div>
  );
};

export default PlaceAutocomplete
