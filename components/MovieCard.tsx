import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import {Link} from "expo-router";
import {TOUCHABLE_STATE} from "react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable";
import {icons} from "@/constants/icons";
const MovieCard = ({id, poster_path, title, vote_average, release_date}: Movie) => {
     return(

       // asChild means it can be clickable
        <Link href={`/Movies/${id}`} asChild>
        <TouchableOpacity className={"w-[30%]"}>
        <Image
            source={ {
                uri:  poster_path ?
                    `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://placehold.co/600x400/1a1a1a/ffffff/png?`

            }}
            className = "w-full h-52 rounded-lg"
            resizeMode={"cover"}


        />
            <Text className="text-sm font-bold color-white mt-2" numberOfLines={1}>
                {title}
            </Text>
            <View className={"flex-row items-center justify-start gap-x-1"}>
                <Image source={icons.star} className={"size-4"}/>
                {/*<Text className = "text-xs text-white font-bold">{Math.round(vote_average/2)}</Text>*/}
                <Text className = "text-xs text-white font-bold">{vote_average}</Text>
            </View>
            <View className={"flex-row items-center justify-between"}>
                <Text className = "text-xs text-light-300 font-medium mt-1">
                    {release_date}
                </Text>
                {/*<Text className = "text-xs text-light-300 uppercase">Movie*/}
                {/*</Text>*/}

            </View>
            </TouchableOpacity>
        </Link>


    )
}

export default MovieCard;