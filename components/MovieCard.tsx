import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : `https://placehpold.co/600x400/1a1a1a/fffff.png`,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white mt-2 " numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-3" />
          <Text className="text-xs text-white font-bold uppercase">
            {Math.round(vote_average * 2)}
          </Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-xs text-light-300 font-medium mt-0.5">
              | {release_date?.split("-")[0]}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
