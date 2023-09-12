import { useState } from "react";
import { StyleSheet, View, Button, FlatList, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [myGoals, setMyGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    setMyGoals((currentMyGoals) => [
      ...currentMyGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setMyGoals((currentMyGoals) => {
      return currentMyGoals.filter((goal) => goal.id !== id);
    });
  }

  function cancelModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancelModal={cancelModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={myGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
        <View style={styles.addGoalButton}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60, // padding is the space between the element's content and its border
    paddingHorizontal: 15,
  },
  goalsContainer: {
    flex: 5,
  },
  addGoalButton: {
    paddingBottom: 30,
  },
});
