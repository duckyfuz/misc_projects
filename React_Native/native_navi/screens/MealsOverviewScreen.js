import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList displayedMeals={displayedMeals} />;
};

export default MealsOverviewScreen;
