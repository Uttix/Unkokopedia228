var threads =  [
 { 
    id: 1,
    title: "Thread 1",
    author: "Unkok",
    date: Date.now(),
    content: "Thread content",
    comments: [
        {
            author: "Unkok",
            date: Date.now(),
            content: "Hey there"
        },
        {
            author: "Unkok",
            date: Date.now(),
            content: "Hey to you too"
        }
    ]
 },
 {
    id: 2,
    title: "Thread 2",
    author: "Unkok",
    date: Date.now(),
    content: "Thread content",
    comments: [
        {
            author: "Unkok",
            date: Date.now(),
            content: "Hey there"
        },
        {
            author: "Unkok",
            date: Date.now(),
            content: "Hey to you too"
        },
    ]
 }
]

var threads;
if (localStorage && localStorage.getItem('threads')) {
threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));s
}