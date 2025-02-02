import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="128" cy="129" r="129" /> 
    <rect x="0" y="281" rx="10" ry="10" width="258" height="20" /> 
    <rect x="0" y="314" rx="10" ry="10" width="260" height="68" /> 
    <rect x="0" y="396" rx="10" ry="10" width="95" height="36" /> 
    <rect x="132" y="395" rx="20" ry="20" width="127" height="36" />
  </ContentLoader>
)

export default Skeleton