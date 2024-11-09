'use client'
import React, { useEffect, useState } from 'react';

interface EssayAnalysis {
  id: number;
  link: string;
  text: string;
  createdAt: string; // Added to include the date for sorting
}

interface EssaysResponse {
  data: { id: number; attributes: EssayAnalysis }[];
}

const VideoGrid = () => {
  const [videos, setVideos] = useState<EssayAnalysis[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/essay-analyses?populate=*');
        const data = await response.json();

        // Map the response to extract `id`, `link`, `text`, and `createdAt` fields
        const videoData = data.data.map((item: any) => ({
          id: item.id,
          link: item.link,
          text: item.text,
          createdAt: item.createdAt, // Use createdAt for sorting
        }));

        // Sort videos by createdAt in descending order (newest first)
        videoData.sort((a:any, b:any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Helper function to convert a YouTube URL into an embeddable link
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <>    
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-3 mt-5 text-blue-500 mb-8">Essays Analysis</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                The best ideas emerge when very different perspectives meet
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {videos.map((video) => (
          <div key={video.id} className="border-gray-300 rounded-lg shadow-sm p-4">
            <div className="w-full h-96"> {/* Fixed height of 24rem (96) */}
              <iframe
                className="w-full h-full rounded-lg"
                src={getYouTubeEmbedUrl(video.link)}
                title="Essay Analysis Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-black mt-2 font-semibold text-lg text-center">{video.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoGrid;
