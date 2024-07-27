import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProvedorUsuario } from "./data/contexts/ContextoUsuario";
import { ProvedorAgendamento } from "./data/contexts/ContextoAgendamento";
import { NavigationContainer } from "@react-navigation/native";
import Cadastro from "./screens/Cadastro";
import Principal from "./screens/Principal";
import Sumario from "./screens/Sumario";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProvedorUsuario>
      <ProvedorAgendamento>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Principal" component={Principal} />
            <Stack.Screen name="Sumario" component={Sumario} />
          </Stack.Navigator>
        </NavigationContainer>
      </ProvedorAgendamento>
    </ProvedorUsuario>
  );
}
