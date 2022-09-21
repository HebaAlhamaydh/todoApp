import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react"
import { Keyboard, Platform, StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, TextInput, Touchable, TouchableOpacity } from 'react-native-web';
import Task from './components/Task';
export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleaddTask = () => {
    // Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null)
  }
  const completeTask = (itemd) => {
    // let itemCopy = [...taskItems]
    // itemCopy.splice(index, 1);
    // setTaskItems(itemCopy)
    const newList=taskItems.filter((item)=>item !== itemd)
    setTaskItems(newList)
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>TODO APP</Text>
        <View style={styles.item}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(item)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.writeTaskWraper}>
        <TextInput style={styles.input} placeholder={"write a task"} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleaddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8babd",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  item: {
    marginTop: 30,
  },
  writeTaskWraper: {
    position: 'absolute',
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: 400,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {}
});
