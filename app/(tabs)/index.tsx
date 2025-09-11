import {Text, View, Image, Animated, ActivityIndicator, FlatList, TouchableOpacity} from "react-native";
import '../global.css';
import {useRouter} from "expo-router";
import {images} from "@/constants/images";
import ScrollView = Animated.ScrollView;
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import {fetchMovies} from "@/services/api";
import useFetch from "@/services/useFetch";
 import MovieCard from "@/components/MovieCard";


export default function Index() {
    const router = useRouter();

    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError
    } = useFetch(() =>
        fetchMovies({
            query: ''
        }))
    const MAX_DISPLAY = 14;
    const displayedMovies = movies.slice(0, MAX_DISPLAY);
    return (
        <View className={"flex-1 bg-primary"}>
            <Image source={images.bg}
                   className={"absolute w-full z-0"}
                   resizeMode={"cover"}
            />
            <ScrollView className={"flex-1 px-5"}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}>
                <Image source={icons.logo} className={"w-12 h-10 mt-20 mb-5 mx-auto"}/>

                {moviesLoading ? (
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        className={"mt-10 self-center"}
                    />
                // ) : moviesError ? (
                //     <Text>Error: {moviesError?.message}</Text>
                ) : (
                    <View className={"flex-1 mt-5"}>
                        <SearchBar
                            onPress={() =>
                                router.push("/search")} // WHEN PRESS THE SEARCHBAR REDIRECTS TO SEARCH PAGE
                            placeholder="Search for a movie" // shows what is in bar
                        />
                        <>
                            <Text className={"text-lg text-white font-bold mt-5 mb-3"}>
                                Latest Movies
                            </Text>

                            <FlatList
                                data={displayedMovies}
                                renderItem={({item}) => (
                                   <MovieCard {...item}/>
                                )}
                                keyExtractor={(item) => item.id.toString()}
                                numColumns={3}
                                //Positions data more nicely
                                columnWrapperStyle={{
                                    justifyContent: 'flex-start',
                                    gap: 20,
                                    paddingRight: 5,
                                    marginBottom: 10
                                }}
                                className={"mt-2 pb-32"}
                                scrollEnabled={false}
                            />
                        </>

                    </View>
                )}
            </ScrollView>
        </View>
    );
}
        // <View className="flex-1 bg-primary">
        //     <Image source={images.bg} className="absolute w-full h-full z-0" />
        //
        //     <FlatList
        //         // Header: logo, search bar, title
        //         ListHeaderComponent={
        //             <>
        //                 <Image
        //                     source={icons.logo}
        //                     className="w-12 h-10 mt-20 mb-5 mx-auto"
        //                 />
        //                 <SearchBar
        //                     onPress={() => router.push("/search")}
        //                     placeholder="Search for a movie"
        //                 />
        //                 <Text className="text-lg text-white font-bold mt-5 mb-3">
        //                     Latest Movies
        //                 </Text>
        //             </>
        //         }
        //
        //         // Data: OMDb returns results in `movies.Search`
        //         data={movies?.Search || []}
        //
        //         // Render each movie title (or include posters as you like)
        //         renderItem={({ item }) => (
        //             <Text className="text-white text-sm m-2">{item.Title}</Text>
        //         )}
        //
        //         keyExtractor={(item) => item.imdbID}
        //
        //         // Styling
        //         contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 16 }}
        //         showsVerticalScrollIndicator={false}
        //     />
        //
        //     {moviesLoading && (
        //         <ActivityIndicator
        //             size="large"
        //             color="#ffffff"
        //             className="absolute top-1/2 self-center"
        //         />
        //     )}
        //     {moviesError && (
        //         <Text className="text-red-400 absolute top-1/2 self-center">
        //             Error: {moviesError.message}
        //         </Text>
        //     )}
        // </View>







