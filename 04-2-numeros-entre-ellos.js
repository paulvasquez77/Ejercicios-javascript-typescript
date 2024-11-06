// Leer dos números y mostrar todos los enteros comprendidos entre ellos.

const dosNumeros = (nums) => {
    // console.log(typeof (nums))
    // console.log(nums.length)
    for (let i = nums[0] + 1; i <= nums[1] - 1; i++) {
        console.log(i)
    }
}

dosNumeros([14, 25])