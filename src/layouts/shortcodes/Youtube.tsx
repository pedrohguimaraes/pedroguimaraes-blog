import React, { useEffect, useState } from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Youtube = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
  [key: string]: any;
}) => {
  const [LiteYouTubeEmbed, setLiteYouTubeEmbed] = useState<any>(null);

  useEffect(() => {
    import("react-lite-youtube-embed").then((module) => {
      setLiteYouTubeEmbed(() => module.default);
    });
  }, []);

  if (!LiteYouTubeEmbed) {
    return <div>Loading...</div>;
  }

  return (
    <LiteYouTubeEmbed
      wrapperClass="yt-lite rounded-lg"
      id={id}
      title={title}
      {...rest}
    />
  );
};

export default Youtube;
