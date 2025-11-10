import React from 'react'
import { Card, Typography } from 'antd'

const { Title, Paragraph } = Typography

const About = () => {
  return (
    <div>
      <Title level={2}>About Page</Title>
      <Card>
        <Paragraph>
          This is a sample about page demonstrating the scalable structure of our application.
        </Paragraph>
        <Paragraph>
          Features implemented:
        </Paragraph>
        <ul>
          <li>Redux state management with Redux Toolkit</li>
          <li>Redux Thunk middleware for async operations</li>
          <li>Ant Design UI components</li>
          <li>Scalable project structure with components and pages</li>
        </ul>
      </Card>
    </div>
  )
}

export default About
