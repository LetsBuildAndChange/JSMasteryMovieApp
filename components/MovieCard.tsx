import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import {Link} from "expo-router";
import {TOUCHABLE_STATE} from "react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable";
import {icons} from "@/constants/icons";
const MovieCard = ({imdbID, Poster, Title, Year, imdbRating}: Movie) => {
     return(
         console.log(imdbID),
       // asChild means it can be clickable
        <Link href={`/Movies/${imdbID}`} asChild>
        <TouchableOpacity className={"w-[30%]"}>
        <Image
            source={ {
                uri:  Poster,

            }}
            className = "w-full h-52 rounded-lg"
            resizeMode={"cover"}


        />
            <Text className={"text-sm font-bold color-white mt-2"}>{Title}</Text>
            {/*<View className={"flex-row items-center justify-start gap-x-1"}>*/}
            {/*    <Image source={icons.star} className={"size-4"}/>*/}
            {/*    <Text className = "text-xs text-white font-bold">{Math.round(imdbRating/2)}</Text>*/}
            {/*</View>*/}
            <View className={"flex-row items-center justify-between"}>
                <Text className = "text-xs text-light-300 font-bold">{Year}</Text>
            </View>
            </TouchableOpacity>
        </Link>


    )
}

export default MovieCard;