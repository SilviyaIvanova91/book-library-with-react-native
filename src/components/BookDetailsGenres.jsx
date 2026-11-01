const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 14,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    color: colors.textMuted,
    fontSize: 15,
  },
  value: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "600",
    flexShrink: 1,
    textAlign: "right",
    marginLeft: 16,
  },
});
