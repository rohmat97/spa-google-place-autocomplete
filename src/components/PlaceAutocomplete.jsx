import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, AutoComplete, Spin, Alert, Switch, Space, Typography } from 'antd'
import { setQuery, searchPlaces, setUseMockData, clearResults } from '../store/slices/placeSearchSlice'
// import { loadGoogleMapsScript } from '../config/googleMaps'

const { Search } = Input
const { Text } = Typography

const PlaceAutocomplete = () => {
  const dispatch = useDispatch()
  const { query, results, loading, error, useMockData } = useSelector(state => state.placeSearch)
  
  const [options, setOptions] = useState([])
  // const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false)
  
  // Update options when results change
  useEffect(() => {
    const newOptions = results.map(place => ({
      value: place.name,
      label: (
        <div>
          <div><strong>{place.name}</strong></div>
          <div style={{ fontSize: '12px', color: '#888' }}>{place.address}</div>
        </div>
      ),
    }))
    setOptions(newOptions)
  }, [results])
  
  // Load Google Maps API (in a real implementation)
  /*
  useEffect(() => {
    const loadMaps = async () => {
      try {
        await loadGoogleMapsScript()
        setGoogleMapsLoaded(true)
      } catch (error) {
        console.error('Failed to load Google Maps:', error)
      }
    }
    
    if (!useMockData) {
      loadMaps()
    }
  }, [useMockData])
  */
  
  const handleSearch = (value) => {
    dispatch(setQuery(value))
    if (value.length > 2) {
      dispatch(searchPlaces(value))
    } else {
      dispatch(clearResults())
    }
  }
  
  const handleSelect = (value) => {
    const selectedPlace = results.find(place => place.name === value)
    if (selectedPlace) {
      console.log('Selected place:', selectedPlace)
      // In a real app, you would dispatch an action to set the selected place
      // With Google API, you might also fetch additional details about the place
    }
  }
  
  const handleToggleMockData = (checked) => {
    dispatch(setUseMockData(checked))
    // Re-search with the new setting
    if (query.length > 2) {
      dispatch(searchPlaces(query))
    }
  }
  
  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <div>
          <Space>
            <Text>Use Mock Data:</Text>
            <Switch checked={useMockData} onChange={handleToggleMockData} />
          </Space>
        </div>
        
        <AutoComplete
          value={query}
          options={options}
          style={{ width: '100%' }}
          onSelect={handleSelect}
          onSearch={handleSearch}
          placeholder="Search for places..."
        >
          <Search 
            placeholder="Search for places..." 
            enterButton 
            loading={loading}
            onSearch={handleSearch}
          />
        </AutoComplete>
        
        {loading && (
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <Spin tip="Searching places..." />
          </div>
        )}
        
        {error && (
          <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
          />
        )}
        
        {results.length > 0 && !loading && (
          <div style={{ marginTop: '10px' }}>
            <Text>Found {results.length} results</Text>
          </div>
        )}
      </Space>
    </div>
  )
}

export default PlaceAutocomplete
