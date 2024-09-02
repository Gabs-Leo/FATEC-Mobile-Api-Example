import { FlatList, Image, Text, View } from "react-native";
import { AxiosEmoji } from "../Axios/AxiosEmoji";
import { useEffect, useState } from "react";

interface Emoji {
  id: string;
  url: string;
  embed_url: string;
  title: string;
  images: { original: { url: string } };
}

export const ApiGallery = () => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    const fetchEmojis = async () => {
      const response = await AxiosEmoji.get<Emoji[]>("");
      setEmojis(response.data.data);
      const x = response.data.data as Emoji[];
      console.log(x[0].embed_url);
    };
    fetchEmojis();
  }, []);

  return (
    <View>
      <FlatList
        data={emojis}
        renderItem={({ item }) => (
          <Image
            style={{ width: "100%", height: 500 }}
            source={{
              uri: item.images.original.url,
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
/*
<Image
  style={{ width: `100%`, height: 200 }}
  source={{  }}
  resizeMode="cover"
/>
*/
