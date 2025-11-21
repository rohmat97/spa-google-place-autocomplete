import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Card, List, Typography, Empty } from 'antd'
import { setSelectedPlace } from "../store/slices/placeSearchSlice";

const { Title, Text } = Typography

const PlaceMap = () => {
  const dispatch = useDispatch();
  const { results, selectedPlace } = useSelector((state) => state.placeSearch);
  
  // In a real implementation, this would be a Google Map component
  // For now, we'll display a simple list of places with their locations
  
  return (
    <Card title="Place Locations" style={{ marginTop: "20px" }}>
      {results.length === 0 ? (
        <Empty
          description="No places to display. Search for a place to see results on the map."
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      ) : (
        <>
          <div
            style={{
              height: "300px",
              backgroundColor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              border: "1px solid #d9d9d9",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {selectedPlace && selectedPlace.location ? (
              <iframe
                title={selectedPlace.name}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps?q=${selectedPlace.location.lat},${selectedPlace.location.lng}&z=15&output=embed`}
                allowFullScreen
              />
            ) : (
              <>
                <Text>Interactive Map would be displayed here</Text>
                <br />
                <Text>
                  (In a real implementation, this would be a Google Map)
                </Text>
              </>
            )}
          </div>

          <Title level={5}>Search Results:</Title>
          <List
            dataSource={results}
            renderItem={(place) => (
              <List.Item
                key={place.id}
                onClick={() => dispatch(setSelectedPlace(place))}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    selectedPlace && selectedPlace.id === place.id
                      ? "#e6f7ff"
                      : "transparent",
                }}
              >
                <List.Item.Meta
                  title={place.name}
                  description={
                    <>
                      <div>{place.address}</div>
                      <div style={{ fontSize: "12px", color: "#888" }}>
                        Lat: {place.location.lat}, Lng: {place.location.lng}
                      </div>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </>
      )}
    </Card>
  );
}

export default PlaceMap
