const screenOptions = {
    headerLeft: () => (
      <Image
      style={styles.headerImage}
      source={require('../assets/images/logo_mobile_elearning.png')} />
    ),
    headerTitle: "",
    headerRight: () => (
     <TouchableOpacity
     onPress={() => alert("Lo")}>
        <Image
        source={require('../assets/icons/favicon.png')}
        style={{marginRight: 10}}
      />
     </TouchableOpacity>
    ),
  };

export default screenOptions;