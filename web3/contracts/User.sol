// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract User {
    struct UserInfo {
        string walletAddress;
        string name;
        string email;
        uint userType; // 1 = farmer, 2 = buyer
        string password; 
    }

    mapping(string => UserInfo) public users;

    constructor() {}

    function addUser(
        string memory walletAddress,
        string memory name,
        string memory email,
        uint userType,
        string memory password
    ) public {
        require(users[walletAddress].userType == 0, "User already exists");

        users[walletAddress] = UserInfo({
            walletAddress: walletAddress,
            name: name,
            email: email,
            userType: userType,
            password: password
        });
    }

    function updatePassword(string memory walletAddress, string memory newPassword) public {
        require(users[walletAddress].userType != 0, "User does not exist");

        users[walletAddress].password = newPassword;
    }

    function loginUser(string memory walletAddress, string memory password) public view returns (bool, UserInfo memory) {
        require(users[walletAddress].userType != 0, "User does not exist");

        if (keccak256(abi.encodePacked(users[walletAddress].password)) == keccak256(abi.encodePacked(password))) {
            return (true, users[walletAddress]);
        } else {
            return (false, UserInfo({walletAddress: "", name: "", email: "", userType: 0, password: ""}));
        }
    }
}
