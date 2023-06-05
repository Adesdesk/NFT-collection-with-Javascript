/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const CertificateNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_candidateName, _gender, _department, _year, _grade, ) {
    const CertificateNFT = {
        "candidateName": _candidateName,
        "gender": _gender,
        "department": _department,
        "year": _year,
        "grade": _grade
    }
    CertificateNFTs.push(CertificateNFT);
    console.log("Minted certificate NFT for " + _candidateName + "\n");

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i=0; i<CertificateNFTs.length; i++) {
        console.log("\nNFT Serial No. " + (i+1));
        console.log("\ncandidateName: " + CertificateNFTs[i].candidateName);
        console.log("\ngender: " + CertificateNFTs[i].gender);
        console.log("\ndepartment: " + CertificateNFTs[i].department);
        console.log("\nyear: " + CertificateNFTs[i].year);
        console.log("\ngrade: " + CertificateNFTs[i].grade);
        console.log("\n_____________________");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("The total number of NFTS minted is: " + CertificateNFTs.length);
}

// call your functions below this line

// call mintNFT function to mint 4 certificate NFTs
mintNFT("Grace Thom", "Female", "Pure Chemistry", "2020", "Distinction");
mintNFT("Ben Roy", "Male", "Biochemistry", "2021", "Distinction");
mintNFT("John Bob", "Male", "Date Science", "2021", "Distinction");
mintNFT("Ivy Scott", "Female", "Physics", "2019", "Distinction");

// call listNFTs function to list NFT collection
listNFTs();

// call getTotalSupply function to get a count of all NFTs available in the collection
getTotalSupply();
