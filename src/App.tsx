import "./App.css";
import { VideoPlayer } from "react-datocms";

const videoData = {
  "data": {
    "upload": {
      "video": {
        "muxPlaybackId": "nvicnl66ERzVAYuRZQ3PhKDzMhpEfwgN", // This is all you really need
        // "title": null,
        // "width": 854,
        // "height": 480,
        // "blurUpThumb": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoQCAgLCg4NDhUNDQ0NDhkNDg0YFxUZGCIVFhUaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHAgQHC8cFhwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA4AGAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAABAwUA/8QAHxAAAAUEAwAAAAAAAAAAAAAAAAECBAUDEjEyEyEj/8QAFgEAAwAAAAAAAAAAAAAAAAAAAgME/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAIDARL/2gAMAwEAAhEDEQA/AIsjz3YCm7ivTIuhalTSk9RHU4tVqBo+hTmoiTeOTp4ABkHPjqMEdaV4qn//2Q=="
      }
    }
  }
}

function App() {
  const myOwnMuxDataEnvKey = "cp6for434cijn816aehvef8f5";

  return (
    <>
      <h1>DatoCMS Mux-Data Test</h1>
      <VideoPlayer
          disableTracking={false} // We normally default it to true
          envKey={myOwnMuxDataEnvKey} // Your own env key from your Mux Data dashboard at https://dashboard.mux.com/environments
          debug={true} // (Optional) Shows analytics events in the browser console
          data={videoData.data.upload.video} // Mock of DatoCMS CDA query response.
      />
    </>
  );
}

export default App;
