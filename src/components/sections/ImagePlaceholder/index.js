

// const ImagePlaceholder = () => (
//   <div
//     style={{
//       width: 100,
//       height: 100,
//       backgroundColor: "gray"
//     }}
//   >
//     {" "}
//   </div>
// )

class ImagePlaceholder extends React.Component {
  render() {
    return (
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gray"
        }}
      >
        <h1>LAZY LOAD</h1>
      </div>
    )
  }
}

export default ImagePlaceholder
