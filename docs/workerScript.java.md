# `workerScript` Submodule <a name="`workerScript` Submodule" id="@cdktf/provider-cloudflare.workerScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkerScript <a name="WorkerScript" id="@cdktf/provider-cloudflare.workerScript.WorkerScript"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script cloudflare_worker_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScript;

WorkerScript.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .content(java.lang.String)
    .name(java.lang.String)
//  .analyticsEngineBinding(IResolvable)
//  .analyticsEngineBinding(java.util.List<WorkerScriptAnalyticsEngineBinding>)
//  .compatibilityDate(java.lang.String)
//  .compatibilityFlags(java.util.List<java.lang.String>)
//  .d1DatabaseBinding(IResolvable)
//  .d1DatabaseBinding(java.util.List<WorkerScriptD1DatabaseBinding>)
//  .dispatchNamespace(java.lang.String)
//  .id(java.lang.String)
//  .kvNamespaceBinding(IResolvable)
//  .kvNamespaceBinding(java.util.List<WorkerScriptKvNamespaceBinding>)
//  .logpush(java.lang.Boolean)
//  .logpush(IResolvable)
//  .module(java.lang.Boolean)
//  .module(IResolvable)
//  .placement(IResolvable)
//  .placement(java.util.List<WorkerScriptPlacement>)
//  .plainTextBinding(IResolvable)
//  .plainTextBinding(java.util.List<WorkerScriptPlainTextBinding>)
//  .queueBinding(IResolvable)
//  .queueBinding(java.util.List<WorkerScriptQueueBinding>)
//  .r2BucketBinding(IResolvable)
//  .r2BucketBinding(java.util.List<WorkerScriptR2BucketBinding>)
//  .secretTextBinding(IResolvable)
//  .secretTextBinding(java.util.List<WorkerScriptSecretTextBinding>)
//  .serviceBinding(IResolvable)
//  .serviceBinding(java.util.List<WorkerScriptServiceBinding>)
//  .tags(java.util.List<java.lang.String>)
//  .webassemblyBinding(IResolvable)
//  .webassemblyBinding(java.util.List<WorkerScriptWebassemblyBinding>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | The script content. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for the script. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.analyticsEngineBinding">analyticsEngineBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>></code> | analytics_engine_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | The date to use for the compatibility flag. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | Compatibility flags used for Worker Scripts. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.d1DatabaseBinding">d1DatabaseBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>></code> | d1_database_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.dispatchNamespace">dispatchNamespace</a></code> | <code>java.lang.String</code> | Name of the Workers for Platforms dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#id WorkerScript#id}. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.kvNamespaceBinding">kvNamespaceBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>></code> | kv_namespace_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.logpush">logpush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabling allows Worker events to be sent to a defined Logpush destination. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.module">module</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to upload Worker as a module. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.placement">placement</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>></code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.plainTextBinding">plainTextBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>></code> | plain_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.queueBinding">queueBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>></code> | queue_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.r2BucketBinding">r2BucketBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>></code> | r2_bucket_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.secretTextBinding">secretTextBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>></code> | secret_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.serviceBinding">serviceBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>></code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#tags WorkerScript#tags}. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.webassemblyBinding">webassemblyBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>></code> | webassembly_binding block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#account_id WorkerScript#account_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.content"></a>

- *Type:* java.lang.String

The script content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#content WorkerScript#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for the script. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `analyticsEngineBinding`<sup>Optional</sup> <a name="analyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.analyticsEngineBinding"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>>

analytics_engine_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#analytics_engine_binding WorkerScript#analytics_engine_binding}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.compatibilityDate"></a>

- *Type:* java.lang.String

The date to use for the compatibility flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#compatibility_date WorkerScript#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.compatibilityFlags"></a>

- *Type:* java.util.List<java.lang.String>

Compatibility flags used for Worker Scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#compatibility_flags WorkerScript#compatibility_flags}

---

##### `d1DatabaseBinding`<sup>Optional</sup> <a name="d1DatabaseBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.d1DatabaseBinding"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>>

d1_database_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#d1_database_binding WorkerScript#d1_database_binding}

---

##### `dispatchNamespace`<sup>Optional</sup> <a name="dispatchNamespace" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.dispatchNamespace"></a>

- *Type:* java.lang.String

Name of the Workers for Platforms dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#dispatch_namespace WorkerScript#dispatch_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#id WorkerScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kvNamespaceBinding`<sup>Optional</sup> <a name="kvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.kvNamespaceBinding"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>>

kv_namespace_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#kv_namespace_binding WorkerScript#kv_namespace_binding}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.logpush"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabling allows Worker events to be sent to a defined Logpush destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#logpush WorkerScript#logpush}

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.module"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to upload Worker as a module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#module WorkerScript#module}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.placement"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#placement WorkerScript#placement}

---

##### `plainTextBinding`<sup>Optional</sup> <a name="plainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.plainTextBinding"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>>

plain_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#plain_text_binding WorkerScript#plain_text_binding}

---

##### `queueBinding`<sup>Optional</sup> <a name="queueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.queueBinding"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>>

queue_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#queue_binding WorkerScript#queue_binding}

---

##### `r2BucketBinding`<sup>Optional</sup> <a name="r2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.r2BucketBinding"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>>

r2_bucket_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#r2_bucket_binding WorkerScript#r2_bucket_binding}

---

##### `secretTextBinding`<sup>Optional</sup> <a name="secretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.secretTextBinding"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>>

secret_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#secret_text_binding WorkerScript#secret_text_binding}

---

##### `serviceBinding`<sup>Optional</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.serviceBinding"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>>

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#service_binding WorkerScript#service_binding}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#tags WorkerScript#tags}.

---

##### `webassemblyBinding`<sup>Optional</sup> <a name="webassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.webassemblyBinding"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>>

webassembly_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#webassembly_binding WorkerScript#webassembly_binding}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding">putAnalyticsEngineBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putD1DatabaseBinding">putD1DatabaseBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding">putKvNamespaceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding">putPlainTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding">putQueueBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding">putR2BucketBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding">putSecretTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding">putServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding">putWebassemblyBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetAnalyticsEngineBinding">resetAnalyticsEngineBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityDate">resetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityFlags">resetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetD1DatabaseBinding">resetD1DatabaseBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetDispatchNamespace">resetDispatchNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetKvNamespaceBinding">resetKvNamespaceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetLogpush">resetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetModule">resetModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlainTextBinding">resetPlainTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetQueueBinding">resetQueueBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetR2BucketBinding">resetR2BucketBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetSecretTextBinding">resetSecretTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetServiceBinding">resetServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetWebassemblyBinding">resetWebassemblyBinding</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnalyticsEngineBinding` <a name="putAnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding"></a>

```java
public void putAnalyticsEngineBinding(IResolvable OR java.util.List<WorkerScriptAnalyticsEngineBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>>

---

##### `putD1DatabaseBinding` <a name="putD1DatabaseBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putD1DatabaseBinding"></a>

```java
public void putD1DatabaseBinding(IResolvable OR java.util.List<WorkerScriptD1DatabaseBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putD1DatabaseBinding.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>>

---

##### `putKvNamespaceBinding` <a name="putKvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding"></a>

```java
public void putKvNamespaceBinding(IResolvable OR java.util.List<WorkerScriptKvNamespaceBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>>

---

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlacement"></a>

```java
public void putPlacement(IResolvable OR java.util.List<WorkerScriptPlacement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlacement.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>>

---

##### `putPlainTextBinding` <a name="putPlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding"></a>

```java
public void putPlainTextBinding(IResolvable OR java.util.List<WorkerScriptPlainTextBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>>

---

##### `putQueueBinding` <a name="putQueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding"></a>

```java
public void putQueueBinding(IResolvable OR java.util.List<WorkerScriptQueueBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>>

---

##### `putR2BucketBinding` <a name="putR2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding"></a>

```java
public void putR2BucketBinding(IResolvable OR java.util.List<WorkerScriptR2BucketBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>>

---

##### `putSecretTextBinding` <a name="putSecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding"></a>

```java
public void putSecretTextBinding(IResolvable OR java.util.List<WorkerScriptSecretTextBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>>

---

##### `putServiceBinding` <a name="putServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding"></a>

```java
public void putServiceBinding(IResolvable OR java.util.List<WorkerScriptServiceBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>>

---

##### `putWebassemblyBinding` <a name="putWebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding"></a>

```java
public void putWebassemblyBinding(IResolvable OR java.util.List<WorkerScriptWebassemblyBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>>

---

##### `resetAnalyticsEngineBinding` <a name="resetAnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetAnalyticsEngineBinding"></a>

```java
public void resetAnalyticsEngineBinding()
```

##### `resetCompatibilityDate` <a name="resetCompatibilityDate" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityDate"></a>

```java
public void resetCompatibilityDate()
```

##### `resetCompatibilityFlags` <a name="resetCompatibilityFlags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityFlags"></a>

```java
public void resetCompatibilityFlags()
```

##### `resetD1DatabaseBinding` <a name="resetD1DatabaseBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetD1DatabaseBinding"></a>

```java
public void resetD1DatabaseBinding()
```

##### `resetDispatchNamespace` <a name="resetDispatchNamespace" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetDispatchNamespace"></a>

```java
public void resetDispatchNamespace()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetId"></a>

```java
public void resetId()
```

##### `resetKvNamespaceBinding` <a name="resetKvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetKvNamespaceBinding"></a>

```java
public void resetKvNamespaceBinding()
```

##### `resetLogpush` <a name="resetLogpush" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetLogpush"></a>

```java
public void resetLogpush()
```

##### `resetModule` <a name="resetModule" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetModule"></a>

```java
public void resetModule()
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlacement"></a>

```java
public void resetPlacement()
```

##### `resetPlainTextBinding` <a name="resetPlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlainTextBinding"></a>

```java
public void resetPlainTextBinding()
```

##### `resetQueueBinding` <a name="resetQueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetQueueBinding"></a>

```java
public void resetQueueBinding()
```

##### `resetR2BucketBinding` <a name="resetR2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetR2BucketBinding"></a>

```java
public void resetR2BucketBinding()
```

##### `resetSecretTextBinding` <a name="resetSecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetSecretTextBinding"></a>

```java
public void resetSecretTextBinding()
```

##### `resetServiceBinding` <a name="resetServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetServiceBinding"></a>

```java
public void resetServiceBinding()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetTags"></a>

```java
public void resetTags()
```

##### `resetWebassemblyBinding` <a name="resetWebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetWebassemblyBinding"></a>

```java
public void resetWebassemblyBinding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkerScript resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScript;

WorkerScript.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScript;

WorkerScript.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScript;

WorkerScript.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScript;

WorkerScript.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkerScript.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WorkerScript resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkerScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkerScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WorkerScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBinding">analyticsEngineBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList">WorkerScriptAnalyticsEngineBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.d1DatabaseBinding">d1DatabaseBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList">WorkerScriptD1DatabaseBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBinding">kvNamespaceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList">WorkerScriptKvNamespaceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList">WorkerScriptPlacementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBinding">plainTextBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList">WorkerScriptPlainTextBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBinding">queueBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList">WorkerScriptQueueBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBinding">r2BucketBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList">WorkerScriptR2BucketBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBinding">secretTextBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList">WorkerScriptSecretTextBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBinding">serviceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList">WorkerScriptServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBinding">webassemblyBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList">WorkerScriptWebassemblyBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBindingInput">analyticsEngineBindingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDateInput">compatibilityDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlagsInput">compatibilityFlagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.d1DatabaseBindingInput">d1DatabaseBindingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dispatchNamespaceInput">dispatchNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBindingInput">kvNamespaceBindingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpushInput">logpushInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.moduleInput">moduleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.placementInput">placementInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBindingInput">plainTextBindingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBindingInput">queueBindingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBindingInput">r2BucketBindingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBindingInput">secretTextBindingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBindingInput">serviceBindingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBindingInput">webassemblyBindingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dispatchNamespace">dispatchNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpush">logpush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.module">module</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `analyticsEngineBinding`<sup>Required</sup> <a name="analyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBinding"></a>

```java
public WorkerScriptAnalyticsEngineBindingList getAnalyticsEngineBinding();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList">WorkerScriptAnalyticsEngineBindingList</a>

---

##### `d1DatabaseBinding`<sup>Required</sup> <a name="d1DatabaseBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.d1DatabaseBinding"></a>

```java
public WorkerScriptD1DatabaseBindingList getD1DatabaseBinding();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList">WorkerScriptD1DatabaseBindingList</a>

---

##### `kvNamespaceBinding`<sup>Required</sup> <a name="kvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBinding"></a>

```java
public WorkerScriptKvNamespaceBindingList getKvNamespaceBinding();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList">WorkerScriptKvNamespaceBindingList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.placement"></a>

```java
public WorkerScriptPlacementList getPlacement();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList">WorkerScriptPlacementList</a>

---

##### `plainTextBinding`<sup>Required</sup> <a name="plainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBinding"></a>

```java
public WorkerScriptPlainTextBindingList getPlainTextBinding();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList">WorkerScriptPlainTextBindingList</a>

---

##### `queueBinding`<sup>Required</sup> <a name="queueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBinding"></a>

```java
public WorkerScriptQueueBindingList getQueueBinding();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList">WorkerScriptQueueBindingList</a>

---

##### `r2BucketBinding`<sup>Required</sup> <a name="r2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBinding"></a>

```java
public WorkerScriptR2BucketBindingList getR2BucketBinding();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList">WorkerScriptR2BucketBindingList</a>

---

##### `secretTextBinding`<sup>Required</sup> <a name="secretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBinding"></a>

```java
public WorkerScriptSecretTextBindingList getSecretTextBinding();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList">WorkerScriptSecretTextBindingList</a>

---

##### `serviceBinding`<sup>Required</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBinding"></a>

```java
public WorkerScriptServiceBindingList getServiceBinding();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList">WorkerScriptServiceBindingList</a>

---

##### `webassemblyBinding`<sup>Required</sup> <a name="webassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBinding"></a>

```java
public WorkerScriptWebassemblyBindingList getWebassemblyBinding();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList">WorkerScriptWebassemblyBindingList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `analyticsEngineBindingInput`<sup>Optional</sup> <a name="analyticsEngineBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBindingInput"></a>

```java
public java.lang.Object getAnalyticsEngineBindingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>>

---

##### `compatibilityDateInput`<sup>Optional</sup> <a name="compatibilityDateInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDateInput"></a>

```java
public java.lang.String getCompatibilityDateInput();
```

- *Type:* java.lang.String

---

##### `compatibilityFlagsInput`<sup>Optional</sup> <a name="compatibilityFlagsInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlagsInput"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `d1DatabaseBindingInput`<sup>Optional</sup> <a name="d1DatabaseBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.d1DatabaseBindingInput"></a>

```java
public java.lang.Object getD1DatabaseBindingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>>

---

##### `dispatchNamespaceInput`<sup>Optional</sup> <a name="dispatchNamespaceInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dispatchNamespaceInput"></a>

```java
public java.lang.String getDispatchNamespaceInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kvNamespaceBindingInput`<sup>Optional</sup> <a name="kvNamespaceBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBindingInput"></a>

```java
public java.lang.Object getKvNamespaceBindingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>>

---

##### `logpushInput`<sup>Optional</sup> <a name="logpushInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpushInput"></a>

```java
public java.lang.Object getLogpushInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `moduleInput`<sup>Optional</sup> <a name="moduleInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.moduleInput"></a>

```java
public java.lang.Object getModuleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.placementInput"></a>

```java
public java.lang.Object getPlacementInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>>

---

##### `plainTextBindingInput`<sup>Optional</sup> <a name="plainTextBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBindingInput"></a>

```java
public java.lang.Object getPlainTextBindingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>>

---

##### `queueBindingInput`<sup>Optional</sup> <a name="queueBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBindingInput"></a>

```java
public java.lang.Object getQueueBindingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>>

---

##### `r2BucketBindingInput`<sup>Optional</sup> <a name="r2BucketBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBindingInput"></a>

```java
public java.lang.Object getR2BucketBindingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>>

---

##### `secretTextBindingInput`<sup>Optional</sup> <a name="secretTextBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBindingInput"></a>

```java
public java.lang.Object getSecretTextBindingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>>

---

##### `serviceBindingInput`<sup>Optional</sup> <a name="serviceBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBindingInput"></a>

```java
public java.lang.Object getServiceBindingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `webassemblyBindingInput`<sup>Optional</sup> <a name="webassemblyBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBindingInput"></a>

```java
public java.lang.Object getWebassemblyBindingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDate"></a>

```java
public java.lang.String getCompatibilityDate();
```

- *Type:* java.lang.String

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlags"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `dispatchNamespace`<sup>Required</sup> <a name="dispatchNamespace" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dispatchNamespace"></a>

```java
public java.lang.String getDispatchNamespace();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpush"></a>

```java
public java.lang.Object getLogpush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.module"></a>

```java
public java.lang.Object getModule();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerScriptAnalyticsEngineBinding <a name="WorkerScriptAnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptAnalyticsEngineBinding;

WorkerScriptAnalyticsEngineBinding.builder()
    .dataset(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.dataset">dataset</a></code> | <code>java.lang.String</code> | The name of the Analytics Engine dataset to write to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.name">name</a></code> | <code>java.lang.String</code> | The global variable for the binding in your Worker code. |

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

The name of the Analytics Engine dataset to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#dataset WorkerScript#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#name WorkerScript#name}

---

### WorkerScriptConfig <a name="WorkerScriptConfig" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptConfig;

WorkerScriptConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .content(java.lang.String)
    .name(java.lang.String)
//  .analyticsEngineBinding(IResolvable)
//  .analyticsEngineBinding(java.util.List<WorkerScriptAnalyticsEngineBinding>)
//  .compatibilityDate(java.lang.String)
//  .compatibilityFlags(java.util.List<java.lang.String>)
//  .d1DatabaseBinding(IResolvable)
//  .d1DatabaseBinding(java.util.List<WorkerScriptD1DatabaseBinding>)
//  .dispatchNamespace(java.lang.String)
//  .id(java.lang.String)
//  .kvNamespaceBinding(IResolvable)
//  .kvNamespaceBinding(java.util.List<WorkerScriptKvNamespaceBinding>)
//  .logpush(java.lang.Boolean)
//  .logpush(IResolvable)
//  .module(java.lang.Boolean)
//  .module(IResolvable)
//  .placement(IResolvable)
//  .placement(java.util.List<WorkerScriptPlacement>)
//  .plainTextBinding(IResolvable)
//  .plainTextBinding(java.util.List<WorkerScriptPlainTextBinding>)
//  .queueBinding(IResolvable)
//  .queueBinding(java.util.List<WorkerScriptQueueBinding>)
//  .r2BucketBinding(IResolvable)
//  .r2BucketBinding(java.util.List<WorkerScriptR2BucketBinding>)
//  .secretTextBinding(IResolvable)
//  .secretTextBinding(java.util.List<WorkerScriptSecretTextBinding>)
//  .serviceBinding(IResolvable)
//  .serviceBinding(java.util.List<WorkerScriptServiceBinding>)
//  .tags(java.util.List<java.lang.String>)
//  .webassemblyBinding(IResolvable)
//  .webassemblyBinding(java.util.List<WorkerScriptWebassemblyBinding>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.content">content</a></code> | <code>java.lang.String</code> | The script content. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for the script. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.analyticsEngineBinding">analyticsEngineBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>></code> | analytics_engine_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | The date to use for the compatibility flag. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | Compatibility flags used for Worker Scripts. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.d1DatabaseBinding">d1DatabaseBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>></code> | d1_database_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dispatchNamespace">dispatchNamespace</a></code> | <code>java.lang.String</code> | Name of the Workers for Platforms dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#id WorkerScript#id}. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.kvNamespaceBinding">kvNamespaceBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>></code> | kv_namespace_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.logpush">logpush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabling allows Worker events to be sent to a defined Logpush destination. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.module">module</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to upload Worker as a module. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.placement">placement</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>></code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.plainTextBinding">plainTextBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>></code> | plain_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.queueBinding">queueBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>></code> | queue_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.r2BucketBinding">r2BucketBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>></code> | r2_bucket_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.secretTextBinding">secretTextBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>></code> | secret_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.serviceBinding">serviceBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>></code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#tags WorkerScript#tags}. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.webassemblyBinding">webassemblyBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>></code> | webassembly_binding block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#account_id WorkerScript#account_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The script content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#content WorkerScript#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for the script. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `analyticsEngineBinding`<sup>Optional</sup> <a name="analyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.analyticsEngineBinding"></a>

```java
public java.lang.Object getAnalyticsEngineBinding();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>>

analytics_engine_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#analytics_engine_binding WorkerScript#analytics_engine_binding}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityDate"></a>

```java
public java.lang.String getCompatibilityDate();
```

- *Type:* java.lang.String

The date to use for the compatibility flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#compatibility_date WorkerScript#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityFlags"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlags();
```

- *Type:* java.util.List<java.lang.String>

Compatibility flags used for Worker Scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#compatibility_flags WorkerScript#compatibility_flags}

---

##### `d1DatabaseBinding`<sup>Optional</sup> <a name="d1DatabaseBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.d1DatabaseBinding"></a>

```java
public java.lang.Object getD1DatabaseBinding();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>>

d1_database_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#d1_database_binding WorkerScript#d1_database_binding}

---

##### `dispatchNamespace`<sup>Optional</sup> <a name="dispatchNamespace" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dispatchNamespace"></a>

```java
public java.lang.String getDispatchNamespace();
```

- *Type:* java.lang.String

Name of the Workers for Platforms dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#dispatch_namespace WorkerScript#dispatch_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#id WorkerScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kvNamespaceBinding`<sup>Optional</sup> <a name="kvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.kvNamespaceBinding"></a>

```java
public java.lang.Object getKvNamespaceBinding();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>>

kv_namespace_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#kv_namespace_binding WorkerScript#kv_namespace_binding}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.logpush"></a>

```java
public java.lang.Object getLogpush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabling allows Worker events to be sent to a defined Logpush destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#logpush WorkerScript#logpush}

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.module"></a>

```java
public java.lang.Object getModule();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to upload Worker as a module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#module WorkerScript#module}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.placement"></a>

```java
public java.lang.Object getPlacement();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#placement WorkerScript#placement}

---

##### `plainTextBinding`<sup>Optional</sup> <a name="plainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.plainTextBinding"></a>

```java
public java.lang.Object getPlainTextBinding();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>>

plain_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#plain_text_binding WorkerScript#plain_text_binding}

---

##### `queueBinding`<sup>Optional</sup> <a name="queueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.queueBinding"></a>

```java
public java.lang.Object getQueueBinding();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>>

queue_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#queue_binding WorkerScript#queue_binding}

---

##### `r2BucketBinding`<sup>Optional</sup> <a name="r2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.r2BucketBinding"></a>

```java
public java.lang.Object getR2BucketBinding();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>>

r2_bucket_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#r2_bucket_binding WorkerScript#r2_bucket_binding}

---

##### `secretTextBinding`<sup>Optional</sup> <a name="secretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.secretTextBinding"></a>

```java
public java.lang.Object getSecretTextBinding();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>>

secret_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#secret_text_binding WorkerScript#secret_text_binding}

---

##### `serviceBinding`<sup>Optional</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.serviceBinding"></a>

```java
public java.lang.Object getServiceBinding();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>>

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#service_binding WorkerScript#service_binding}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#tags WorkerScript#tags}.

---

##### `webassemblyBinding`<sup>Optional</sup> <a name="webassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.webassemblyBinding"></a>

```java
public java.lang.Object getWebassemblyBinding();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>>

webassembly_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#webassembly_binding WorkerScript#webassembly_binding}

---

### WorkerScriptD1DatabaseBinding <a name="WorkerScriptD1DatabaseBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptD1DatabaseBinding;

WorkerScriptD1DatabaseBinding.builder()
    .databaseId(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Database ID of D1 database to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding.property.name">name</a></code> | <code>java.lang.String</code> | The global variable for the binding in your Worker code. |

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Database ID of D1 database to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#database_id WorkerScript#database_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#name WorkerScript#name}

---

### WorkerScriptKvNamespaceBinding <a name="WorkerScriptKvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptKvNamespaceBinding;

WorkerScriptKvNamespaceBinding.builder()
    .name(java.lang.String)
    .namespaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.name">name</a></code> | <code>java.lang.String</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | ID of the KV namespace you want to use. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

ID of the KV namespace you want to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#namespace_id WorkerScript#namespace_id}

---

### WorkerScriptPlacement <a name="WorkerScriptPlacement" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptPlacement;

WorkerScriptPlacement.builder()
    .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement.property.mode">mode</a></code> | <code>java.lang.String</code> | The placement mode for the Worker. Available values: `smart`. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The placement mode for the Worker. Available values: `smart`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#mode WorkerScript#mode}

---

### WorkerScriptPlainTextBinding <a name="WorkerScriptPlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptPlainTextBinding;

WorkerScriptPlainTextBinding.builder()
    .name(java.lang.String)
    .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.name">name</a></code> | <code>java.lang.String</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.text">text</a></code> | <code>java.lang.String</code> | The plain text you want to store. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

The plain text you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#text WorkerScript#text}

---

### WorkerScriptQueueBinding <a name="WorkerScriptQueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptQueueBinding;

WorkerScriptQueueBinding.builder()
    .binding(java.lang.String)
    .queue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.binding">binding</a></code> | <code>java.lang.String</code> | The name of the global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.queue">queue</a></code> | <code>java.lang.String</code> | Name of the queue you want to use. |

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.binding"></a>

```java
public java.lang.String getBinding();
```

- *Type:* java.lang.String

The name of the global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#binding WorkerScript#binding}

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.queue"></a>

```java
public java.lang.String getQueue();
```

- *Type:* java.lang.String

Name of the queue you want to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#queue WorkerScript#queue}

---

### WorkerScriptR2BucketBinding <a name="WorkerScriptR2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptR2BucketBinding;

WorkerScriptR2BucketBinding.builder()
    .bucketName(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the Bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.name">name</a></code> | <code>java.lang.String</code> | The global variable for the binding in your Worker code. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the Bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#bucket_name WorkerScript#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#name WorkerScript#name}

---

### WorkerScriptSecretTextBinding <a name="WorkerScriptSecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptSecretTextBinding;

WorkerScriptSecretTextBinding.builder()
    .name(java.lang.String)
    .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.name">name</a></code> | <code>java.lang.String</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.text">text</a></code> | <code>java.lang.String</code> | The secret text you want to store. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

The secret text you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#text WorkerScript#text}

---

### WorkerScriptServiceBinding <a name="WorkerScriptServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptServiceBinding;

WorkerScriptServiceBinding.builder()
    .name(java.lang.String)
    .service(java.lang.String)
//  .environment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.name">name</a></code> | <code>java.lang.String</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.service">service</a></code> | <code>java.lang.String</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.environment">environment</a></code> | <code>java.lang.String</code> | The name of the Worker environment to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#service WorkerScript#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#environment WorkerScript#environment}

---

### WorkerScriptWebassemblyBinding <a name="WorkerScriptWebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptWebassemblyBinding;

WorkerScriptWebassemblyBinding.builder()
    .module(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.module">module</a></code> | <code>java.lang.String</code> | The base64 encoded wasm module you want to store. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.name">name</a></code> | <code>java.lang.String</code> | The global variable for the binding in your Worker code. |

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.module"></a>

```java
public java.lang.String getModule();
```

- *Type:* java.lang.String

The base64 encoded wasm module you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#module WorkerScript#module}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/worker_script#name WorkerScript#name}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerScriptAnalyticsEngineBindingList <a name="WorkerScriptAnalyticsEngineBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptAnalyticsEngineBindingList;

new WorkerScriptAnalyticsEngineBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get"></a>

```java
public WorkerScriptAnalyticsEngineBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>>

---


### WorkerScriptAnalyticsEngineBindingOutputReference <a name="WorkerScriptAnalyticsEngineBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptAnalyticsEngineBindingOutputReference;

new WorkerScriptAnalyticsEngineBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>

---


### WorkerScriptD1DatabaseBindingList <a name="WorkerScriptD1DatabaseBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptD1DatabaseBindingList;

new WorkerScriptD1DatabaseBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.get"></a>

```java
public WorkerScriptD1DatabaseBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>>

---


### WorkerScriptD1DatabaseBindingOutputReference <a name="WorkerScriptD1DatabaseBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptD1DatabaseBindingOutputReference;

new WorkerScriptD1DatabaseBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>

---


### WorkerScriptKvNamespaceBindingList <a name="WorkerScriptKvNamespaceBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptKvNamespaceBindingList;

new WorkerScriptKvNamespaceBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get"></a>

```java
public WorkerScriptKvNamespaceBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>>

---


### WorkerScriptKvNamespaceBindingOutputReference <a name="WorkerScriptKvNamespaceBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptKvNamespaceBindingOutputReference;

new WorkerScriptKvNamespaceBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceIdInput">namespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceIdInput"></a>

```java
public java.lang.String getNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>

---


### WorkerScriptPlacementList <a name="WorkerScriptPlacementList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptPlacementList;

new WorkerScriptPlacementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.get"></a>

```java
public WorkerScriptPlacementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>>

---


### WorkerScriptPlacementOutputReference <a name="WorkerScriptPlacementOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptPlacementOutputReference;

new WorkerScriptPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>

---


### WorkerScriptPlainTextBindingList <a name="WorkerScriptPlainTextBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptPlainTextBindingList;

new WorkerScriptPlainTextBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get"></a>

```java
public WorkerScriptPlainTextBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>>

---


### WorkerScriptPlainTextBindingOutputReference <a name="WorkerScriptPlainTextBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptPlainTextBindingOutputReference;

new WorkerScriptPlainTextBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>

---


### WorkerScriptQueueBindingList <a name="WorkerScriptQueueBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptQueueBindingList;

new WorkerScriptQueueBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get"></a>

```java
public WorkerScriptQueueBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>>

---


### WorkerScriptQueueBindingOutputReference <a name="WorkerScriptQueueBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptQueueBindingOutputReference;

new WorkerScriptQueueBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.bindingInput">bindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queueInput">queueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.binding">binding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queue">queue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bindingInput`<sup>Optional</sup> <a name="bindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.bindingInput"></a>

```java
public java.lang.String getBindingInput();
```

- *Type:* java.lang.String

---

##### `queueInput`<sup>Optional</sup> <a name="queueInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queueInput"></a>

```java
public java.lang.String getQueueInput();
```

- *Type:* java.lang.String

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.binding"></a>

```java
public java.lang.String getBinding();
```

- *Type:* java.lang.String

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queue"></a>

```java
public java.lang.String getQueue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>

---


### WorkerScriptR2BucketBindingList <a name="WorkerScriptR2BucketBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptR2BucketBindingList;

new WorkerScriptR2BucketBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get"></a>

```java
public WorkerScriptR2BucketBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>>

---


### WorkerScriptR2BucketBindingOutputReference <a name="WorkerScriptR2BucketBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptR2BucketBindingOutputReference;

new WorkerScriptR2BucketBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>

---


### WorkerScriptSecretTextBindingList <a name="WorkerScriptSecretTextBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptSecretTextBindingList;

new WorkerScriptSecretTextBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get"></a>

```java
public WorkerScriptSecretTextBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>>

---


### WorkerScriptSecretTextBindingOutputReference <a name="WorkerScriptSecretTextBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptSecretTextBindingOutputReference;

new WorkerScriptSecretTextBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>

---


### WorkerScriptServiceBindingList <a name="WorkerScriptServiceBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptServiceBindingList;

new WorkerScriptServiceBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get"></a>

```java
public WorkerScriptServiceBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>>

---


### WorkerScriptServiceBindingOutputReference <a name="WorkerScriptServiceBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptServiceBindingOutputReference;

new WorkerScriptServiceBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>

---


### WorkerScriptWebassemblyBindingList <a name="WorkerScriptWebassemblyBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptWebassemblyBindingList;

new WorkerScriptWebassemblyBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get"></a>

```java
public WorkerScriptWebassemblyBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>>

---


### WorkerScriptWebassemblyBindingOutputReference <a name="WorkerScriptWebassemblyBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_script.WorkerScriptWebassemblyBindingOutputReference;

new WorkerScriptWebassemblyBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.moduleInput">moduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.module">module</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `moduleInput`<sup>Optional</sup> <a name="moduleInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.moduleInput"></a>

```java
public java.lang.String getModuleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.module"></a>

```java
public java.lang.String getModule();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>

---



