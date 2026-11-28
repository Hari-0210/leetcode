
import java.util.Arrays;

class Solution {
    public boolean checkInclusion(String s1, String s2) {

        if (s1.length() > s2.length()) {
            return false;
        }

        int[] hashS = new int[26];
        int[] hashW = new int[26];

        int i = 0;

        while (i < s1.length()) {
            hashS[s1.codePointAt(i) - 'a']++;
            hashW[s2.codePointAt(i) - 'a']++;
            i++;
        }

        if (hasEqual(hashS, hashW)) {
            return true;
        }

        int windowSize = s1.length();
        i = windowSize;

        while (i < s2.length()) {

            // Add incoming character
            hashW[s2.codePointAt(i) - 'a']++;

            // Remove outgoing character
            hashW[s2.codePointAt(i - windowSize) - 'a']--;

            if (hasEqual(hashS, hashW)) {
                return true;
            }

            i++;
        }

        return false;
    }

    static boolean hasEqual(int[] hashS, int[] hashW) {
        int i = 0;

        while (i < 26) {
            if (hashS[i] != hashW[i]) {
                return false;
            }
            i++;
        }

        return true;
    }
}
