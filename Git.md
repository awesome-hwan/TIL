# Git config

1. git config --list 명령어 //나의 이메일, 이름을 확인할 수 있다.

나의 이름과 이메일이 설정안되있으면 commit contributions 색칠이 되지 않는다. ㅠㅠ 슬픔  

# git init ~ push  

내가 공부한 자료를 올린다.  

1. git init  
git을 초기화상태로 만든다. 

<img width="634" alt="2018-01-17 8 47 55" src="https://user-images.githubusercontent.com/25549306/35018102-5677de38-fb63-11e7-8e90-5162d71bc60b.png">

[그림1. 출저 - 코드카데미]  

위 상황으로 나의 문서가 로컬 ~ 서버로 전송된다.  

2. git status  
`untracked files`을 나타내주는 명령어.  
로컬에서 변경은 되었지만 서버에 반영은 되지 않은상태.  

3. git add  
` git add fileName 및 git add . `
준비 영역에 파일을 올릴 수 있다.  

4. git diff
`git diff fileName`  
로컬 <-> 준비 영역 상태의 비교를 볼 수 있다.  

5. git commit  
`git commit -m "CommitMessage"`  
폴더안에 준비영역 변경사항을 영구적으로 저장.  
커밋메시지 조건  
> 1. 따옴표로 묶어야함.  
> 2. 현재시제로 쓰여야함.   
> 3. 사용시 간결(50자 이내).


