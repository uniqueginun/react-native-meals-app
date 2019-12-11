import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetails from "../screens/MealDetails";
import Colors from "../constants/Colors";

const MainApplicationNavigator = createStackNavigator(
  {
    Categories: Categories,
    CategoryMeals: {
      screen: CategoryMeals
    },
    MealDetails: MealDetails
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.info
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(MainApplicationNavigator);
