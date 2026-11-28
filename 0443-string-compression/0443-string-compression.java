class Solution {
    public int compress(char[] str) {
        if (str == null || str.length == 0) {
            return str.length;
        }
        if (str.length == 1) return  1;
        StringBuilder s = new StringBuilder();
        int count = 1;
        for (int i = 1; i < str.length; i++) {
            if (str[i - 1] == str[i]) {
                count++;
            } else {
                s.append(str[i - 1]);
                if (count > 1) {
                    s.append(count);
                    count =1;
                }
            }
        }
        s.append(str[str.length - 1]);
        if (count > 1) {
            s.append(count);
        }
        for (int i = 0; i < s.length(); i++) {
            str[i] = s.charAt(i);
        }
        IO.println(s.toString().toCharArray());
        return s.toString().toCharArray().length;
    }
}