<script lang="ts">
    // import { assets } from "$app/paths";
    import ProseArticle from "$lib/general/ProseArticle.svelte";
    export let title = "GoTM - Go Task Manager";
</script>

<section class="mb-16">
    <ProseArticle>
        <h1>{title}</h1>

        <hr />
        <p class="font-bold text-red-500">NOTE:<br />THIS IS AN AI GENERATED, VERY ROUGH, "DRAFT"<br />The vast majority of this is probably not true or is overly exaggerated!<br>I just haven't had the time to write out the project details yet :)</p>
        <hr />

        <h2>Project Overview</h2>
        <p>The GoTM CLI Task Manager is a Go-based application that seamlessly combines a traditional command-line interface (CLI) with an engaging terminal user interface (TUI). It is engineered for speed and efficiency, leveraging Go’s robust concurrency model to manage tasks in real time, making it ideal for power users who demand both performance and interactivity.</p>

        <h2>Technologies Used</h2>
        <ul>
            <li>
                <strong>Go:</strong> The core language, chosen for its simplicity, type safety, and native support for concurrency through goroutines and channels.
            </li>
            <li>
                <strong>Bubble Tea:</strong> This library powers the TUI, providing a fluid and responsive user experience with a focus on minimalism and ease of navigation.
            </li>
            <li>
                <strong>Cobra/Viper:</strong> These libraries underpin the CLI, offering robust command parsing, argument handling, and configuration management, ensuring a comprehensive and user-friendly command-line experience.
            </li>
            <li>
                <strong>SQLite:</strong> A lightweight, embedded database that ensures reliable and persistent storage of task data.
            </li>
        </ul>

        <h2>Development Process</h2>
        <p>Development began by establishing a strong CLI foundation using Cobra and Viper, which enabled the rapid implementation of essential task operations. The TUI was later built with Bubble Tea to provide a visually appealing, interactive interface. A key focus has been on harnessing Go’s concurrency capabilities—using goroutines and channels—to handle asynchronous operations such as background task processing and database synchronization without sacrificing performance.</p>

        <h3>Key Features and Goals</h3>
        <ul>
            <li>
                <strong>Dual Interface:</strong> Support for both a traditional CLI and an interactive TUI, catering to diverse user preferences.
            </li>
            <li>
                <strong>Concurrent Operations:</strong> Efficient task handling via Go’s goroutines and channels, ensuring real-time responsiveness even during intensive processing.
            </li>
            <li>
                <strong>Persistent Task Management:</strong> Reliable storage and retrieval of tasks using SQLite, making it easy to save, load, and update your task list.
            </li>
            <li>
                <strong>Robust CLI Experience:</strong> Powered by Cobra and Viper, the CLI supports a full range of commands—from adding and editing to deleting tasks—along with extensive configuration options.
            </li>
        </ul>

        <h2>Future Aspirations</h2>
        <p>Looking ahead, plans include integrating the task manager with popular cloud-based task services, enhancing customization with user-defined keybindings, and further optimizing the concurrent processing model. These improvements aim to create a scalable tool that adapts to the evolving needs of users.</p>

        <h2>Challenges and Solutions</h2>
        <p>Combining both CLI and TUI interfaces while maintaining efficient concurrent operations poses unique challenges. By leveraging Go’s native concurrency and robust libraries like Bubble Tea and Cobra/Viper, the project addresses issues related to state management, asynchronous processing, and real-time UI updates, ensuring a smooth and responsive experience.</p>

        <h2>Project Timeline and Commitment</h2>
        <p>Currently in active development, the project is focused on refining core functionalities and enhancing both interfaces. Regular updates are planned to expand features, improve concurrency handling, and integrate additional tools, ensuring that GoTM remains a cutting-edge solution for task management.</p>

        <h2>Conclusion</h2>
        <p>The GoTM CLI Task Manager exemplifies modern software design by combining the efficiency of Go’s concurrency with the versatility of dual interfaces. It is a practical, scalable solution for managing tasks in a terminal environment, merging the best of CLI and TUI experiences to enhance productivity.</p>

        <h2>Contact Information</h2>
        <p>For questions, contributions, or feedback, please connect via the project's GitHub repository or the contact channels listed in the documentation.</p>
    </ProseArticle>
</section>
