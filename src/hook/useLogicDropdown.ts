import { ref, Ref } from "vue";

interface EventMouse {
  pageX: number;
  pageY: number;
}



type ReturnUseMousePosition = {
  xMouse?: Ref<number>;
  yMouse: Ref<number>;
  isOpenOption: Ref<boolean>;
  toggleDropdown: (e: any) => void;
  closeDropdown: () => void
};

export default (): ReturnUseMousePosition => {
  // const xMouse = ref(0);
  const yMouse = ref<number>(0);
  const isOpenOption = ref<boolean>(false);

  const toggleDropdown = (e: EventMouse) => {
    // xMouse.value = e.pageX ;
    yMouse.value = e.pageY + 20;
    isOpenOption.value = !isOpenOption.value;
  };

  const closeDropdown = () => {
    isOpenOption.value = false
  }
  

  return { yMouse, isOpenOption, toggleDropdown, closeDropdown };
};
