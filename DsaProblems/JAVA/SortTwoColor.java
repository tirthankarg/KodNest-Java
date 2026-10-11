
import java.util.Arrays;

public class SortTwoColor {
    public static void sortTwoColor(int[] nums) {
        int i = 0;
        int j = nums.length - 1;

        while (i < j) {
            if (nums[i] == 0) {
                i++;
            } else if (nums[j] == 1) {
                j--;
            } else {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
                j--;
            }
        }
    }

    public static void main(String[] args) {
        int[] nums = {0, 1, 1, 1, 0, 0, 1, 1};

        sortTwoColor(nums);

        System.out.println(Arrays.toString(nums));
    }
}
