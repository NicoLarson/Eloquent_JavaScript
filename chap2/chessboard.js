let size = 8, hash = "#"
for (let i = 0; i < size-1; i++) {
    i % 2 == 0 ? hash += " " : hash += "#"
}
for (let i = 0; i < size; i++) {
    console.log(hash)
}
/*
# # # # # # # #
# # # # # # # #
# # # # # # # #
# # # # # # # #
# # # # # # # #
# # # # # # # #
# # # # # # # #
# # # # # # # #
*/