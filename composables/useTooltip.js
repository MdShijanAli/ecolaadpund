export function useTooltip(props) {
  const showTooltip = ref(false);

  const toggleTooltip = (value) => {
    if (!!props.tooltipText) showTooltip.value = value;
  };

  return {
    showTooltip,
    toggleTooltip,
  };
}
