import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Saved = () => {
  return (
    <View className="bg-primary flex-1 items-center justify-center">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.save} className="size-10" tintColor={"#fff"} />
        <Text className="text-gray-500 font-base text-lg">Save</Text>
      </View>
    </View>
  );
};

export default Saved;
