import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2E1F58", "#54426B", "#A790AF"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your beliefs with affirmations
          </Text>
          <View></View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
