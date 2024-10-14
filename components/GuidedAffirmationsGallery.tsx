import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/Models/AffirmationCategory";
import { Link } from "expo-router";

interface GuidedAffirmationsGallery {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGallery) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <TouchableOpacity>
                <View className="h-36 w-32 rounded-md mr-4">
                  <Image
                    source={item.image}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
