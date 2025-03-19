import './App.css'
import { VideoPlayer } from 'react-datocms';

const videoData = {
    "data": {
        "upload": {
            "video": {
                "muxPlaybackId": "nvicnl66ERzVAYuRZQ3PhKDzMhpEfwgN",
                "title": null,
                "width": 854,
                "height": 480,
                "blurUpThumb": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoQCAgLCg4NDhUNDQ0NDhkNDg0YFxUZGCIVFhUaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHAgQHC8cFhwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA4AGAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAABAwUA/8QAHxAAAAUEAwAAAAAAAAAAAAAAAAECBAUDEjEyEyEj/8QAFgEAAwAAAAAAAAAAAAAAAAAAAgME/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAIDARL/2gAMAwEAAhEDEQA/AIsjz3YCm7ivTIuhalTSk9RHU4tVqBo+hTmoiTeOTp4ABkHPjqMEdaV4qn//2Q=="
            }
        }
    }
}

function App() {

  return (
    <>
     <h1>DatoCMS Mux-Data Test</h1>
    <VideoPlayer data={videoData.data.upload.video} />
    </>
  )
}

export default App
