# `workersScript` Submodule <a name="`workersScript` Submodule" id="@cdktf/provider-cloudflare.workersScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkersScript <a name="WorkersScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScript"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script cloudflare_workers_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScript;

WorkersScript.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .scriptName(java.lang.String)
//  .assets(WorkersScriptAssets)
//  .bindings(IResolvable|java.util.List<WorkersScriptBindings>)
//  .bodyPart(java.lang.String)
//  .compatibilityDate(java.lang.String)
//  .compatibilityFlags(java.util.List<java.lang.String>)
//  .content(java.lang.String)
//  .contentFile(java.lang.String)
//  .contentSha256(java.lang.String)
//  .contentType(java.lang.String)
//  .keepAssets(java.lang.Boolean|IResolvable)
//  .keepBindings(java.util.List<java.lang.String>)
//  .limits(WorkersScriptLimits)
//  .logpush(java.lang.Boolean|IResolvable)
//  .mainModule(java.lang.String)
//  .migrations(WorkersScriptMigrations)
//  .observability(WorkersScriptObservability)
//  .placement(WorkersScriptPlacement)
//  .tailConsumers(IResolvable|java.util.List<WorkersScriptTailConsumers>)
//  .usageModel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scriptName">scriptName</a></code> | <code>java.lang.String</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.bindings">bindings</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>></code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.bodyPart">bodyPart</a></code> | <code>java.lang.String</code> | Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Module or Service Worker contents of the Worker. Conflicts with `content_file`. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentFile">contentFile</a></code> | <code>java.lang.String</code> | Path to a file containing the Module or Service Worker contents of the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentSha256">contentSha256</a></code> | <code>java.lang.String</code> | SHA-256 hash of the Worker contents. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python"). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.keepAssets">keepAssets</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.keepBindings">keepBindings</a></code> | <code>java.util.List<java.lang.String></code> | List of binding types to keep from previous_upload. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | Limits to apply for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.logpush">logpush</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether Logpush is turned on for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.mainModule">mainModule</a></code> | <code>java.lang.String</code> | Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | Migrations to apply for Durable Objects associated with this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.observability">observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | Observability settings for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.tailConsumers">tailConsumers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>></code> | List of Workers that will consume logs from the attached Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.usageModel">usageModel</a></code> | <code>java.lang.String</code> | Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#account_id WorkersScript#account_id}

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scriptName"></a>

- *Type:* java.lang.String

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.assets"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#assets WorkersScript#assets}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.bindings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>>

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#bindings WorkersScript#bindings}

---

##### `bodyPart`<sup>Optional</sup> <a name="bodyPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.bodyPart"></a>

- *Type:* java.lang.String

Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#body_part WorkersScript#body_part}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityDate"></a>

- *Type:* java.lang.String

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#compatibility_date WorkersScript#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityFlags"></a>

- *Type:* java.util.List<java.lang.String>

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#compatibility_flags WorkersScript#compatibility_flags}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Module or Service Worker contents of the Worker. Conflicts with `content_file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#content WorkersScript#content}

---

##### `contentFile`<sup>Optional</sup> <a name="contentFile" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentFile"></a>

- *Type:* java.lang.String

Path to a file containing the Module or Service Worker contents of the Worker.

Conflicts with `content`. Must be paired with `content_sha256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#content_file WorkersScript#content_file}

---

##### `contentSha256`<sup>Optional</sup> <a name="contentSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentSha256"></a>

- *Type:* java.lang.String

SHA-256 hash of the Worker contents.

Used to trigger updates when source code changes. Must be provided when `content_file` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#content_sha256 WorkersScript#content_sha256}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#content_type WorkersScript#content_type}

---

##### `keepAssets`<sup>Optional</sup> <a name="keepAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.keepAssets"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#keep_assets WorkersScript#keep_assets}

---

##### `keepBindings`<sup>Optional</sup> <a name="keepBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.keepBindings"></a>

- *Type:* java.util.List<java.lang.String>

List of binding types to keep from previous_upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#keep_bindings WorkersScript#keep_bindings}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.limits"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

Limits to apply for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#limits WorkersScript#limits}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.logpush"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether Logpush is turned on for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#logpush WorkersScript#logpush}

---

##### `mainModule`<sup>Optional</sup> <a name="mainModule" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.mainModule"></a>

- *Type:* java.lang.String

Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#main_module WorkersScript#main_module}

---

##### `migrations`<sup>Optional</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.migrations"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

Migrations to apply for Durable Objects associated with this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#migrations WorkersScript#migrations}

---

##### `observability`<sup>Optional</sup> <a name="observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.observability"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

Observability settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#observability WorkersScript#observability}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#placement WorkersScript#placement}

---

##### `tailConsumers`<sup>Optional</sup> <a name="tailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.tailConsumers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>>

List of Workers that will consume logs from the attached Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#tail_consumers WorkersScript#tail_consumers}

---

##### `usageModel`<sup>Optional</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.usageModel"></a>

- *Type:* java.lang.String

Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#usage_model WorkersScript#usage_model}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets">putAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings">putBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations">putMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability">putObservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers">putTailConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetAssets">resetAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBindings">resetBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBodyPart">resetBodyPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate">resetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags">resetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentFile">resetContentFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentSha256">resetContentSha256</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepAssets">resetKeepAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepBindings">resetKeepBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLogpush">resetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMainModule">resetMainModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMigrations">resetMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetObservability">resetObservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetTailConsumers">resetTailConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetUsageModel">resetUsageModel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssets` <a name="putAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets"></a>

```java
public void putAssets(WorkersScriptAssets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

---

##### `putBindings` <a name="putBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings"></a>

```java
public void putBindings(IResolvable|java.util.List<WorkersScriptBindings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>>

---

##### `putLimits` <a name="putLimits" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putLimits"></a>

```java
public void putLimits(WorkersScriptLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

---

##### `putMigrations` <a name="putMigrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations"></a>

```java
public void putMigrations(WorkersScriptMigrations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

---

##### `putObservability` <a name="putObservability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability"></a>

```java
public void putObservability(WorkersScriptObservability value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

---

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement"></a>

```java
public void putPlacement(WorkersScriptPlacement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

---

##### `putTailConsumers` <a name="putTailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers"></a>

```java
public void putTailConsumers(IResolvable|java.util.List<WorkersScriptTailConsumers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>>

---

##### `resetAssets` <a name="resetAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetAssets"></a>

```java
public void resetAssets()
```

##### `resetBindings` <a name="resetBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBindings"></a>

```java
public void resetBindings()
```

##### `resetBodyPart` <a name="resetBodyPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBodyPart"></a>

```java
public void resetBodyPart()
```

##### `resetCompatibilityDate` <a name="resetCompatibilityDate" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate"></a>

```java
public void resetCompatibilityDate()
```

##### `resetCompatibilityFlags` <a name="resetCompatibilityFlags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags"></a>

```java
public void resetCompatibilityFlags()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentFile` <a name="resetContentFile" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentFile"></a>

```java
public void resetContentFile()
```

##### `resetContentSha256` <a name="resetContentSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentSha256"></a>

```java
public void resetContentSha256()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetKeepAssets` <a name="resetKeepAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepAssets"></a>

```java
public void resetKeepAssets()
```

##### `resetKeepBindings` <a name="resetKeepBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepBindings"></a>

```java
public void resetKeepBindings()
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLimits"></a>

```java
public void resetLimits()
```

##### `resetLogpush` <a name="resetLogpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLogpush"></a>

```java
public void resetLogpush()
```

##### `resetMainModule` <a name="resetMainModule" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMainModule"></a>

```java
public void resetMainModule()
```

##### `resetMigrations` <a name="resetMigrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMigrations"></a>

```java
public void resetMigrations()
```

##### `resetObservability` <a name="resetObservability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetObservability"></a>

```java
public void resetObservability()
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlacement"></a>

```java
public void resetPlacement()
```

##### `resetTailConsumers` <a name="resetTailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetTailConsumers"></a>

```java
public void resetTailConsumers()
```

##### `resetUsageModel` <a name="resetUsageModel" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetUsageModel"></a>

```java
public void resetUsageModel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScript;

WorkersScript.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScript;

WorkersScript.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScript;

WorkersScript.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScript;

WorkersScript.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkersScript.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkersScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkersScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WorkersScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference">WorkersScriptAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindings">bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList">WorkersScriptBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.handlers">handlers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasAssets">hasAssets</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasModules">hasModules</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lastDeployedFrom">lastDeployedFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference">WorkersScriptLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference">WorkersScriptMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationTag">migrationTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.namedHandlers">namedHandlers</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList">WorkersScriptNamedHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observability">observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference">WorkersScriptObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference">WorkersScriptPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.startupTimeMs">startupTimeMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumers">tailConsumers</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList">WorkersScriptTailConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assetsInput">assetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindingsInput">bindingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPartInput">bodyPartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDateInput">compatibilityDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlagsInput">compatibilityFlagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFileInput">contentFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256Input">contentSha256Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssetsInput">keepAssetsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindingsInput">keepBindingsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limitsInput">limitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpushInput">logpushInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModuleInput">mainModuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationsInput">migrationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observabilityInput">observabilityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placementInput">placementInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptNameInput">scriptNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumersInput">tailConsumersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModelInput">usageModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPart">bodyPart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFile">contentFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256">contentSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssets">keepAssets</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindings">keepBindings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpush">logpush</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModule">mainModule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModel">usageModel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assets"></a>

```java
public WorkersScriptAssetsOutputReference getAssets();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference">WorkersScriptAssetsOutputReference</a>

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindings"></a>

```java
public WorkersScriptBindingsList getBindings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList">WorkersScriptBindingsList</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.handlers"></a>

```java
public java.util.List<java.lang.String> getHandlers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hasAssets`<sup>Required</sup> <a name="hasAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasAssets"></a>

```java
public IResolvable getHasAssets();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `hasModules`<sup>Required</sup> <a name="hasModules" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasModules"></a>

```java
public IResolvable getHasModules();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastDeployedFrom`<sup>Required</sup> <a name="lastDeployedFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lastDeployedFrom"></a>

```java
public java.lang.String getLastDeployedFrom();
```

- *Type:* java.lang.String

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limits"></a>

```java
public WorkersScriptLimitsOutputReference getLimits();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference">WorkersScriptLimitsOutputReference</a>

---

##### `migrations`<sup>Required</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrations"></a>

```java
public WorkersScriptMigrationsOutputReference getMigrations();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference">WorkersScriptMigrationsOutputReference</a>

---

##### `migrationTag`<sup>Required</sup> <a name="migrationTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationTag"></a>

```java
public java.lang.String getMigrationTag();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `namedHandlers`<sup>Required</sup> <a name="namedHandlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.namedHandlers"></a>

```java
public WorkersScriptNamedHandlersList getNamedHandlers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList">WorkersScriptNamedHandlersList</a>

---

##### `observability`<sup>Required</sup> <a name="observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observability"></a>

```java
public WorkersScriptObservabilityOutputReference getObservability();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference">WorkersScriptObservabilityOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placement"></a>

```java
public WorkersScriptPlacementOutputReference getPlacement();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference">WorkersScriptPlacementOutputReference</a>

---

##### `startupTimeMs`<sup>Required</sup> <a name="startupTimeMs" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.startupTimeMs"></a>

```java
public java.lang.Number getStartupTimeMs();
```

- *Type:* java.lang.Number

---

##### `tailConsumers`<sup>Required</sup> <a name="tailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumers"></a>

```java
public WorkersScriptTailConsumersList getTailConsumers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList">WorkersScriptTailConsumersList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `assetsInput`<sup>Optional</sup> <a name="assetsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assetsInput"></a>

```java
public IResolvable|WorkersScriptAssets getAssetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

---

##### `bindingsInput`<sup>Optional</sup> <a name="bindingsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindingsInput"></a>

```java
public IResolvable|java.util.List<WorkersScriptBindings> getBindingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>>

---

##### `bodyPartInput`<sup>Optional</sup> <a name="bodyPartInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPartInput"></a>

```java
public java.lang.String getBodyPartInput();
```

- *Type:* java.lang.String

---

##### `compatibilityDateInput`<sup>Optional</sup> <a name="compatibilityDateInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDateInput"></a>

```java
public java.lang.String getCompatibilityDateInput();
```

- *Type:* java.lang.String

---

##### `compatibilityFlagsInput`<sup>Optional</sup> <a name="compatibilityFlagsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlagsInput"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentFileInput`<sup>Optional</sup> <a name="contentFileInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFileInput"></a>

```java
public java.lang.String getContentFileInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentSha256Input`<sup>Optional</sup> <a name="contentSha256Input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256Input"></a>

```java
public java.lang.String getContentSha256Input();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `keepAssetsInput`<sup>Optional</sup> <a name="keepAssetsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssetsInput"></a>

```java
public java.lang.Boolean|IResolvable getKeepAssetsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `keepBindingsInput`<sup>Optional</sup> <a name="keepBindingsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindingsInput"></a>

```java
public java.util.List<java.lang.String> getKeepBindingsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limitsInput"></a>

```java
public IResolvable|WorkersScriptLimits getLimitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

---

##### `logpushInput`<sup>Optional</sup> <a name="logpushInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpushInput"></a>

```java
public java.lang.Boolean|IResolvable getLogpushInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mainModuleInput`<sup>Optional</sup> <a name="mainModuleInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModuleInput"></a>

```java
public java.lang.String getMainModuleInput();
```

- *Type:* java.lang.String

---

##### `migrationsInput`<sup>Optional</sup> <a name="migrationsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationsInput"></a>

```java
public IResolvable|WorkersScriptMigrations getMigrationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

---

##### `observabilityInput`<sup>Optional</sup> <a name="observabilityInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observabilityInput"></a>

```java
public IResolvable|WorkersScriptObservability getObservabilityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placementInput"></a>

```java
public IResolvable|WorkersScriptPlacement getPlacementInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

---

##### `scriptNameInput`<sup>Optional</sup> <a name="scriptNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptNameInput"></a>

```java
public java.lang.String getScriptNameInput();
```

- *Type:* java.lang.String

---

##### `tailConsumersInput`<sup>Optional</sup> <a name="tailConsumersInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumersInput"></a>

```java
public IResolvable|java.util.List<WorkersScriptTailConsumers> getTailConsumersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>>

---

##### `usageModelInput`<sup>Optional</sup> <a name="usageModelInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModelInput"></a>

```java
public java.lang.String getUsageModelInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bodyPart`<sup>Required</sup> <a name="bodyPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPart"></a>

```java
public java.lang.String getBodyPart();
```

- *Type:* java.lang.String

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDate"></a>

```java
public java.lang.String getCompatibilityDate();
```

- *Type:* java.lang.String

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlags"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentFile`<sup>Required</sup> <a name="contentFile" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFile"></a>

```java
public java.lang.String getContentFile();
```

- *Type:* java.lang.String

---

##### `contentSha256`<sup>Required</sup> <a name="contentSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256"></a>

```java
public java.lang.String getContentSha256();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `keepAssets`<sup>Required</sup> <a name="keepAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssets"></a>

```java
public java.lang.Boolean|IResolvable getKeepAssets();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `keepBindings`<sup>Required</sup> <a name="keepBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindings"></a>

```java
public java.util.List<java.lang.String> getKeepBindings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpush"></a>

```java
public java.lang.Boolean|IResolvable getLogpush();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mainModule`<sup>Required</sup> <a name="mainModule" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModule"></a>

```java
public java.lang.String getMainModule();
```

- *Type:* java.lang.String

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModel"></a>

```java
public java.lang.String getUsageModel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkersScriptAssets <a name="WorkersScriptAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptAssets;

WorkersScriptAssets.builder()
//  .config(WorkersScriptAssetsConfig)
//  .directory(java.lang.String)
//  .jwt(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.directory">directory</a></code> | <code>java.lang.String</code> | Path to the directory containing asset files to upload. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.jwt">jwt</a></code> | <code>java.lang.String</code> | Token provided upon successful upload of all files from a registered manifest. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.config"></a>

```java
public WorkersScriptAssetsConfig getConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#config WorkersScript#config}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Path to the directory containing asset files to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#directory WorkersScript#directory}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#jwt WorkersScript#jwt}

---

### WorkersScriptAssetsConfig <a name="WorkersScriptAssetsConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptAssetsConfig;

WorkersScriptAssetsConfig.builder()
//  .headers(java.lang.String)
//  .htmlHandling(java.lang.String)
//  .notFoundHandling(java.lang.String)
//  .redirects(java.lang.String)
//  .runWorkerFirst(java.util.Map<java.lang.String, java.lang.Object>)
//  .serveDirectly(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.headers">headers</a></code> | <code>java.lang.String</code> | The contents of a _headers file (used to attach custom headers on asset responses). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.htmlHandling">htmlHandling</a></code> | <code>java.lang.String</code> | Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.notFoundHandling">notFoundHandling</a></code> | <code>java.lang.String</code> | Determines the response when a request does not match a static asset, and there is no Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.redirects">redirects</a></code> | <code>java.lang.String</code> | The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.runWorkerFirst">runWorkerFirst</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | When a boolean true, requests will always invoke the Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.serveDirectly">serveDirectly</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When true and the incoming request matches an asset, that will be served instead of invoking the Worker script. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.headers"></a>

```java
public java.lang.String getHeaders();
```

- *Type:* java.lang.String

The contents of a _headers file (used to attach custom headers on asset responses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#headers WorkersScript#headers}

---

##### `htmlHandling`<sup>Optional</sup> <a name="htmlHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.htmlHandling"></a>

```java
public java.lang.String getHtmlHandling();
```

- *Type:* java.lang.String

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#html_handling WorkersScript#html_handling}

---

##### `notFoundHandling`<sup>Optional</sup> <a name="notFoundHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.notFoundHandling"></a>

```java
public java.lang.String getNotFoundHandling();
```

- *Type:* java.lang.String

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#not_found_handling WorkersScript#not_found_handling}

---

##### `redirects`<sup>Optional</sup> <a name="redirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.redirects"></a>

```java
public java.lang.String getRedirects();
```

- *Type:* java.lang.String

The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#redirects WorkersScript#redirects}

---

##### `runWorkerFirst`<sup>Optional</sup> <a name="runWorkerFirst" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.runWorkerFirst"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getRunWorkerFirst();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

When a boolean true, requests will always invoke the Worker script.

Otherwise, attempt to serve an asset matching the request, falling back to the Worker script. When a list of strings, contains path rules to control routing to either the Worker or assets. Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#run_worker_first WorkersScript#run_worker_first}

---

##### `serveDirectly`<sup>Optional</sup> <a name="serveDirectly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.serveDirectly"></a>

```java
public java.lang.Boolean|IResolvable getServeDirectly();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When true and the incoming request matches an asset, that will be served instead of invoking the Worker script.

When false, requests will always invoke the Worker script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#serve_directly WorkersScript#serve_directly}

---

### WorkersScriptBindings <a name="WorkersScriptBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptBindings;

WorkersScriptBindings.builder()
    .name(java.lang.String)
    .type(java.lang.String)
//  .algorithm(java.lang.String)
//  .allowedDestinationAddresses(java.util.List<java.lang.String>)
//  .allowedSenderAddresses(java.util.List<java.lang.String>)
//  .bucketName(java.lang.String)
//  .certificateId(java.lang.String)
//  .className(java.lang.String)
//  .dataset(java.lang.String)
//  .destinationAddress(java.lang.String)
//  .environment(java.lang.String)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .indexName(java.lang.String)
//  .json(java.lang.String)
//  .jurisdiction(java.lang.String)
//  .keyBase64(java.lang.String)
//  .keyJwk(java.lang.String)
//  .namespace(java.lang.String)
//  .namespaceId(java.lang.String)
//  .oldName(java.lang.String)
//  .outbound(WorkersScriptBindingsOutbound)
//  .part(java.lang.String)
//  .pipeline(java.lang.String)
//  .queueName(java.lang.String)
//  .scriptName(java.lang.String)
//  .secretName(java.lang.String)
//  .service(java.lang.String)
//  .storeId(java.lang.String)
//  .text(java.lang.String)
//  .usages(java.util.List<java.lang.String>)
//  .versionId(java.lang.String)
//  .workflowName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.name">name</a></code> | <code>java.lang.String</code> | A JavaScript variable name for the binding. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.type">type</a></code> | <code>java.lang.String</code> | The kind of resource that the binding provides. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedDestinationAddresses">allowedDestinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed destination addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedSenderAddresses">allowedSenderAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed sender addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | R2 bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Identifier of the certificate to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.className">className</a></code> | <code>java.lang.String</code> | The exported class name of the Durable Object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.dataset">dataset</a></code> | <code>java.lang.String</code> | The name of the dataset to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | Destination address for the email. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.environment">environment</a></code> | <code>java.lang.String</code> | The environment of the script_name to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.format">format</a></code> | <code>java.lang.String</code> | Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.id">id</a></code> | <code>java.lang.String</code> | Identifier of the D1 database to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.indexName">indexName</a></code> | <code>java.lang.String</code> | Name of the Vectorize index to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.json">json</a></code> | <code>java.lang.String</code> | JSON data to use. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyBase64">keyBase64</a></code> | <code>java.lang.String</code> | Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyJwk">keyJwk</a></code> | <code>java.lang.String</code> | Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The name of the dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | Namespace identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.oldName">oldName</a></code> | <code>java.lang.String</code> | The old name of the inherited binding. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a></code> | Outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.part">part</a></code> | <code>java.lang.String</code> | The name of the file containing the data content. Only accepted for `service worker syntax` Workers. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.pipeline">pipeline</a></code> | <code>java.lang.String</code> | Name of the Pipeline to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.queueName">queueName</a></code> | <code>java.lang.String</code> | Name of the Queue to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | The script where the Durable Object is defined, if it is external to this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the secret in the store. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.service">service</a></code> | <code>java.lang.String</code> | Name of Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.storeId">storeId</a></code> | <code>java.lang.String</code> | ID of the store containing the secret. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.text">text</a></code> | <code>java.lang.String</code> | The text value to use. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.usages">usages</a></code> | <code>java.util.List<java.lang.String></code> | Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.versionId">versionId</a></code> | <code>java.lang.String</code> | Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | Name of the Workflow to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A JavaScript variable name for the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#name WorkersScript#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The kind of resource that the binding provides.

Available values: "ai", "analytics_engine", "assets", "browser", "d1", "data_blob", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "inherit", "images", "json", "kv_namespace", "mtls_certificate", "plain_text", "pipelines", "queue", "r2_bucket", "secret_text", "send_email", "service", "tail_consumer", "text_blob", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow", "wasm_module".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#type WorkersScript#type}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#algorithm WorkersScript#algorithm}

---

##### `allowedDestinationAddresses`<sup>Optional</sup> <a name="allowedDestinationAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedDestinationAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of allowed destination addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#allowed_destination_addresses WorkersScript#allowed_destination_addresses}

---

##### `allowedSenderAddresses`<sup>Optional</sup> <a name="allowedSenderAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedSenderAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedSenderAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of allowed sender addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#allowed_sender_addresses WorkersScript#allowed_sender_addresses}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

R2 bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#bucket_name WorkersScript#bucket_name}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Identifier of the certificate to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#certificate_id WorkersScript#certificate_id}

---

##### `className`<sup>Optional</sup> <a name="className" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.className"></a>

```java
public java.lang.String getClassName();
```

- *Type:* java.lang.String

The exported class name of the Durable Object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#class_name WorkersScript#class_name}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

The name of the dataset to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#dataset WorkersScript#dataset}

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

Destination address for the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#destination_address WorkersScript#destination_address}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The environment of the script_name to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#format WorkersScript#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Identifier of the D1 database to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#id WorkersScript#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

Name of the Vectorize index to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#index_name WorkersScript#index_name}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

JSON data to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#json WorkersScript#json}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.jurisdiction"></a>

```java
public java.lang.String getJurisdiction();
```

- *Type:* java.lang.String

The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#jurisdiction WorkersScript#jurisdiction}

---

##### `keyBase64`<sup>Optional</sup> <a name="keyBase64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyBase64"></a>

```java
public java.lang.String getKeyBase64();
```

- *Type:* java.lang.String

Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#key_base64 WorkersScript#key_base64}

---

##### `keyJwk`<sup>Optional</sup> <a name="keyJwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyJwk"></a>

```java
public java.lang.String getKeyJwk();
```

- *Type:* java.lang.String

Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#key_jwk WorkersScript#key_jwk}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The name of the dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#namespace WorkersScript#namespace}

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

Namespace identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#namespace_id WorkersScript#namespace_id}

---

##### `oldName`<sup>Optional</sup> <a name="oldName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.oldName"></a>

```java
public java.lang.String getOldName();
```

- *Type:* java.lang.String

The old name of the inherited binding.

If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#old_name WorkersScript#old_name}

---

##### `outbound`<sup>Optional</sup> <a name="outbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.outbound"></a>

```java
public WorkersScriptBindingsOutbound getOutbound();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#outbound WorkersScript#outbound}

---

##### `part`<sup>Optional</sup> <a name="part" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.part"></a>

```java
public java.lang.String getPart();
```

- *Type:* java.lang.String

The name of the file containing the data content. Only accepted for `service worker syntax` Workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#part WorkersScript#part}

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.pipeline"></a>

```java
public java.lang.String getPipeline();
```

- *Type:* java.lang.String

Name of the Pipeline to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#pipeline WorkersScript#pipeline}

---

##### `queueName`<sup>Optional</sup> <a name="queueName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

Name of the Queue to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#queue_name WorkersScript#queue_name}

---

##### `scriptName`<sup>Optional</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

The script where the Durable Object is defined, if it is external to this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Name of the secret in the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#secret_name WorkersScript#secret_name}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Name of Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#service WorkersScript#service}

---

##### `storeId`<sup>Optional</sup> <a name="storeId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.storeId"></a>

```java
public java.lang.String getStoreId();
```

- *Type:* java.lang.String

ID of the store containing the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#store_id WorkersScript#store_id}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

The text value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#text WorkersScript#text}

---

##### `usages`<sup>Optional</sup> <a name="usages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.usages"></a>

```java
public java.util.List<java.lang.String> getUsages();
```

- *Type:* java.util.List<java.lang.String>

Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#usages WorkersScript#usages}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version.

Defaults to inheriting the binding from the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#version_id WorkersScript#version_id}

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

Name of the Workflow to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#workflow_name WorkersScript#workflow_name}

---

### WorkersScriptBindingsOutbound <a name="WorkersScriptBindingsOutbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptBindingsOutbound;

WorkersScriptBindingsOutbound.builder()
//  .params(java.util.List<java.lang.String>)
//  .worker(WorkersScriptBindingsOutboundWorker)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.params">params</a></code> | <code>java.util.List<java.lang.String></code> | Pass information from the Dispatch Worker to the Outbound Worker through the parameters. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a></code> | Outbound worker. |

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.params"></a>

```java
public java.util.List<java.lang.String> getParams();
```

- *Type:* java.util.List<java.lang.String>

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#params WorkersScript#params}

---

##### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.worker"></a>

```java
public WorkersScriptBindingsOutboundWorker getWorker();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#worker WorkersScript#worker}

---

### WorkersScriptBindingsOutboundWorker <a name="WorkersScriptBindingsOutboundWorker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptBindingsOutboundWorker;

WorkersScriptBindingsOutboundWorker.builder()
//  .environment(java.lang.String)
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.environment">environment</a></code> | <code>java.lang.String</code> | Environment of the outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.service">service</a></code> | <code>java.lang.String</code> | Name of the outbound worker. |

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#service WorkersScript#service}

---

### WorkersScriptConfig <a name="WorkersScriptConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptConfig;

WorkersScriptConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .scriptName(java.lang.String)
//  .assets(WorkersScriptAssets)
//  .bindings(IResolvable|java.util.List<WorkersScriptBindings>)
//  .bodyPart(java.lang.String)
//  .compatibilityDate(java.lang.String)
//  .compatibilityFlags(java.util.List<java.lang.String>)
//  .content(java.lang.String)
//  .contentFile(java.lang.String)
//  .contentSha256(java.lang.String)
//  .contentType(java.lang.String)
//  .keepAssets(java.lang.Boolean|IResolvable)
//  .keepBindings(java.util.List<java.lang.String>)
//  .limits(WorkersScriptLimits)
//  .logpush(java.lang.Boolean|IResolvable)
//  .mainModule(java.lang.String)
//  .migrations(WorkersScriptMigrations)
//  .observability(WorkersScriptObservability)
//  .placement(WorkersScriptPlacement)
//  .tailConsumers(IResolvable|java.util.List<WorkersScriptTailConsumers>)
//  .usageModel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bindings">bindings</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>></code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bodyPart">bodyPart</a></code> | <code>java.lang.String</code> | Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.content">content</a></code> | <code>java.lang.String</code> | Module or Service Worker contents of the Worker. Conflicts with `content_file`. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentFile">contentFile</a></code> | <code>java.lang.String</code> | Path to a file containing the Module or Service Worker contents of the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentSha256">contentSha256</a></code> | <code>java.lang.String</code> | SHA-256 hash of the Worker contents. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python"). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepAssets">keepAssets</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepBindings">keepBindings</a></code> | <code>java.util.List<java.lang.String></code> | List of binding types to keep from previous_upload. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | Limits to apply for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush">logpush</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether Logpush is turned on for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.mainModule">mainModule</a></code> | <code>java.lang.String</code> | Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | Migrations to apply for Durable Objects associated with this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.observability">observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | Observability settings for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.tailConsumers">tailConsumers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>></code> | List of Workers that will consume logs from the attached Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.usageModel">usageModel</a></code> | <code>java.lang.String</code> | Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#account_id WorkersScript#account_id}

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.assets"></a>

```java
public WorkersScriptAssets getAssets();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#assets WorkersScript#assets}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bindings"></a>

```java
public IResolvable|java.util.List<WorkersScriptBindings> getBindings();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>>

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#bindings WorkersScript#bindings}

---

##### `bodyPart`<sup>Optional</sup> <a name="bodyPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bodyPart"></a>

```java
public java.lang.String getBodyPart();
```

- *Type:* java.lang.String

Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#body_part WorkersScript#body_part}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate"></a>

```java
public java.lang.String getCompatibilityDate();
```

- *Type:* java.lang.String

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#compatibility_date WorkersScript#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlags();
```

- *Type:* java.util.List<java.lang.String>

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#compatibility_flags WorkersScript#compatibility_flags}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Module or Service Worker contents of the Worker. Conflicts with `content_file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#content WorkersScript#content}

---

##### `contentFile`<sup>Optional</sup> <a name="contentFile" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentFile"></a>

```java
public java.lang.String getContentFile();
```

- *Type:* java.lang.String

Path to a file containing the Module or Service Worker contents of the Worker.

Conflicts with `content`. Must be paired with `content_sha256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#content_file WorkersScript#content_file}

---

##### `contentSha256`<sup>Optional</sup> <a name="contentSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentSha256"></a>

```java
public java.lang.String getContentSha256();
```

- *Type:* java.lang.String

SHA-256 hash of the Worker contents.

Used to trigger updates when source code changes. Must be provided when `content_file` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#content_sha256 WorkersScript#content_sha256}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#content_type WorkersScript#content_type}

---

##### `keepAssets`<sup>Optional</sup> <a name="keepAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepAssets"></a>

```java
public java.lang.Boolean|IResolvable getKeepAssets();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#keep_assets WorkersScript#keep_assets}

---

##### `keepBindings`<sup>Optional</sup> <a name="keepBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepBindings"></a>

```java
public java.util.List<java.lang.String> getKeepBindings();
```

- *Type:* java.util.List<java.lang.String>

List of binding types to keep from previous_upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#keep_bindings WorkersScript#keep_bindings}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.limits"></a>

```java
public WorkersScriptLimits getLimits();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

Limits to apply for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#limits WorkersScript#limits}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush"></a>

```java
public java.lang.Boolean|IResolvable getLogpush();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether Logpush is turned on for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#logpush WorkersScript#logpush}

---

##### `mainModule`<sup>Optional</sup> <a name="mainModule" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.mainModule"></a>

```java
public java.lang.String getMainModule();
```

- *Type:* java.lang.String

Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#main_module WorkersScript#main_module}

---

##### `migrations`<sup>Optional</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.migrations"></a>

```java
public WorkersScriptMigrations getMigrations();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

Migrations to apply for Durable Objects associated with this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#migrations WorkersScript#migrations}

---

##### `observability`<sup>Optional</sup> <a name="observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.observability"></a>

```java
public WorkersScriptObservability getObservability();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

Observability settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#observability WorkersScript#observability}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement"></a>

```java
public WorkersScriptPlacement getPlacement();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#placement WorkersScript#placement}

---

##### `tailConsumers`<sup>Optional</sup> <a name="tailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.tailConsumers"></a>

```java
public IResolvable|java.util.List<WorkersScriptTailConsumers> getTailConsumers();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>>

List of Workers that will consume logs from the attached Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#tail_consumers WorkersScript#tail_consumers}

---

##### `usageModel`<sup>Optional</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.usageModel"></a>

```java
public java.lang.String getUsageModel();
```

- *Type:* java.lang.String

Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#usage_model WorkersScript#usage_model}

---

### WorkersScriptLimits <a name="WorkersScriptLimits" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptLimits;

WorkersScriptLimits.builder()
//  .cpuMs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits.property.cpuMs">cpuMs</a></code> | <code>java.lang.Number</code> | The amount of CPU time this Worker can use in milliseconds. |

---

##### `cpuMs`<sup>Optional</sup> <a name="cpuMs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits.property.cpuMs"></a>

```java
public java.lang.Number getCpuMs();
```

- *Type:* java.lang.Number

The amount of CPU time this Worker can use in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#cpu_ms WorkersScript#cpu_ms}

---

### WorkersScriptMigrations <a name="WorkersScriptMigrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrations;

WorkersScriptMigrations.builder()
//  .deletedClasses(java.util.List<java.lang.String>)
//  .newClasses(java.util.List<java.lang.String>)
//  .newSqliteClasses(java.util.List<java.lang.String>)
//  .newTag(java.lang.String)
//  .oldTag(java.lang.String)
//  .renamedClasses(IResolvable|java.util.List<WorkersScriptMigrationsRenamedClasses>)
//  .steps(IResolvable|java.util.List<WorkersScriptMigrationsSteps>)
//  .transferredClasses(IResolvable|java.util.List<WorkersScriptMigrationsTransferredClasses>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.deletedClasses">deletedClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newClasses">newClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newSqliteClasses">newSqliteClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newTag">newTag</a></code> | <code>java.lang.String</code> | Tag to set as the latest migration tag. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.oldTag">oldTag</a></code> | <code>java.lang.String</code> | Tag used to verify against the latest migration tag for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.renamedClasses">renamedClasses</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>></code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.steps">steps</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>></code> | Migrations to apply in order. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.transferredClasses">transferredClasses</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>></code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `deletedClasses`<sup>Optional</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.deletedClasses"></a>

```java
public java.util.List<java.lang.String> getDeletedClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}

---

##### `newClasses`<sup>Optional</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newClasses"></a>

```java
public java.util.List<java.lang.String> getNewClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#new_classes WorkersScript#new_classes}

---

##### `newSqliteClasses`<sup>Optional</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newSqliteClasses"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}

---

##### `newTag`<sup>Optional</sup> <a name="newTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newTag"></a>

```java
public java.lang.String getNewTag();
```

- *Type:* java.lang.String

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#new_tag WorkersScript#new_tag}

---

##### `oldTag`<sup>Optional</sup> <a name="oldTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.oldTag"></a>

```java
public java.lang.String getOldTag();
```

- *Type:* java.lang.String

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#old_tag WorkersScript#old_tag}

---

##### `renamedClasses`<sup>Optional</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.renamedClasses"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsRenamedClasses> getRenamedClasses();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>>

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.steps"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsSteps> getSteps();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>>

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#steps WorkersScript#steps}

---

##### `transferredClasses`<sup>Optional</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.transferredClasses"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsTransferredClasses> getTransferredClasses();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>>

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}

---

### WorkersScriptMigrationsRenamedClasses <a name="WorkersScriptMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsRenamedClasses;

WorkersScriptMigrationsRenamedClasses.builder()
//  .from(java.lang.String)
//  .to(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsSteps <a name="WorkersScriptMigrationsSteps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsSteps;

WorkersScriptMigrationsSteps.builder()
//  .deletedClasses(java.util.List<java.lang.String>)
//  .newClasses(java.util.List<java.lang.String>)
//  .newSqliteClasses(java.util.List<java.lang.String>)
//  .renamedClasses(IResolvable|java.util.List<WorkersScriptMigrationsStepsRenamedClasses>)
//  .transferredClasses(IResolvable|java.util.List<WorkersScriptMigrationsStepsTransferredClasses>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.deletedClasses">deletedClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newClasses">newClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newSqliteClasses">newSqliteClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.renamedClasses">renamedClasses</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>></code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.transferredClasses">transferredClasses</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>></code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `deletedClasses`<sup>Optional</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.deletedClasses"></a>

```java
public java.util.List<java.lang.String> getDeletedClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}

---

##### `newClasses`<sup>Optional</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newClasses"></a>

```java
public java.util.List<java.lang.String> getNewClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#new_classes WorkersScript#new_classes}

---

##### `newSqliteClasses`<sup>Optional</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newSqliteClasses"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}

---

##### `renamedClasses`<sup>Optional</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.renamedClasses"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsStepsRenamedClasses> getRenamedClasses();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>>

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}

---

##### `transferredClasses`<sup>Optional</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.transferredClasses"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsStepsTransferredClasses> getTransferredClasses();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>>

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}

---

### WorkersScriptMigrationsStepsRenamedClasses <a name="WorkersScriptMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsStepsRenamedClasses;

WorkersScriptMigrationsStepsRenamedClasses.builder()
//  .from(java.lang.String)
//  .to(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsStepsTransferredClasses <a name="WorkersScriptMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsStepsTransferredClasses;

WorkersScriptMigrationsStepsTransferredClasses.builder()
//  .from(java.lang.String)
//  .fromScript(java.lang.String)
//  .to(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.fromScript">fromScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from_script WorkersScript#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `fromScript`<sup>Optional</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.fromScript"></a>

```java
public java.lang.String getFromScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from_script WorkersScript#from_script}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsTransferredClasses <a name="WorkersScriptMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsTransferredClasses;

WorkersScriptMigrationsTransferredClasses.builder()
//  .from(java.lang.String)
//  .fromScript(java.lang.String)
//  .to(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.fromScript">fromScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from_script WorkersScript#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `fromScript`<sup>Optional</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.fromScript"></a>

```java
public java.lang.String getFromScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#from_script WorkersScript#from_script}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptNamedHandlers <a name="WorkersScriptNamedHandlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptNamedHandlers;

WorkersScriptNamedHandlers.builder()
    .build();
```


### WorkersScriptObservability <a name="WorkersScriptObservability" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptObservability;

WorkersScriptObservability.builder()
    .enabled(java.lang.Boolean|IResolvable)
//  .headSamplingRate(java.lang.Number)
//  .logs(WorkersScriptObservabilityLogs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether observability is enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.headSamplingRate">headSamplingRate</a></code> | <code>java.lang.Number</code> | The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a></code> | Log settings for the Worker. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#enabled WorkersScript#enabled}

---

##### `headSamplingRate`<sup>Optional</sup> <a name="headSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.headSamplingRate"></a>

```java
public java.lang.Number getHeadSamplingRate();
```

- *Type:* java.lang.Number

The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.logs"></a>

```java
public WorkersScriptObservabilityLogs getLogs();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#logs WorkersScript#logs}

---

### WorkersScriptObservabilityLogs <a name="WorkersScriptObservabilityLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptObservabilityLogs;

WorkersScriptObservabilityLogs.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .invocationLogs(java.lang.Boolean|IResolvable)
//  .destinations(java.util.List<java.lang.String>)
//  .headSamplingRate(java.lang.Number)
//  .persist(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether logs are enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.invocationLogs">invocationLogs</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.destinations">destinations</a></code> | <code>java.util.List<java.lang.String></code> | A list of destinations where logs will be exported to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.headSamplingRate">headSamplingRate</a></code> | <code>java.lang.Number</code> | The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.persist">persist</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether log persistence is enabled for the Worker. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#enabled WorkersScript#enabled}

---

##### `invocationLogs`<sup>Required</sup> <a name="invocationLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.invocationLogs"></a>

```java
public java.lang.Boolean|IResolvable getInvocationLogs();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#invocation_logs WorkersScript#invocation_logs}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.destinations"></a>

```java
public java.util.List<java.lang.String> getDestinations();
```

- *Type:* java.util.List<java.lang.String>

A list of destinations where logs will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#destinations WorkersScript#destinations}

---

##### `headSamplingRate`<sup>Optional</sup> <a name="headSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.headSamplingRate"></a>

```java
public java.lang.Number getHeadSamplingRate();
```

- *Type:* java.lang.Number

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

##### `persist`<sup>Optional</sup> <a name="persist" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.persist"></a>

```java
public java.lang.Boolean|IResolvable getPersist();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether log persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#persist WorkersScript#persist}

---

### WorkersScriptPlacement <a name="WorkersScriptPlacement" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptPlacement;

WorkersScriptPlacement.builder()
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode">mode</a></code> | <code>java.lang.String</code> | Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart". |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#mode WorkersScript#mode}

---

### WorkersScriptTailConsumers <a name="WorkersScriptTailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptTailConsumers;

WorkersScriptTailConsumers.builder()
    .service(java.lang.String)
//  .environment(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.service">service</a></code> | <code>java.lang.String</code> | Name of Worker that is to be the consumer. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.environment">environment</a></code> | <code>java.lang.String</code> | Optional environment if the Worker utilizes one. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Optional dispatch namespace the script belongs to. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Name of Worker that is to be the consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#service WorkersScript#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

Optional environment if the Worker utilizes one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Optional dispatch namespace the script belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/workers_script#namespace WorkersScript#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkersScriptAssetsConfigOutputReference <a name="WorkersScriptAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptAssetsConfigOutputReference;

new WorkersScriptAssetsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHtmlHandling">resetHtmlHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetNotFoundHandling">resetNotFoundHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRedirects">resetRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRunWorkerFirst">resetRunWorkerFirst</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetServeDirectly">resetServeDirectly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetHtmlHandling` <a name="resetHtmlHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHtmlHandling"></a>

```java
public void resetHtmlHandling()
```

##### `resetNotFoundHandling` <a name="resetNotFoundHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetNotFoundHandling"></a>

```java
public void resetNotFoundHandling()
```

##### `resetRedirects` <a name="resetRedirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRedirects"></a>

```java
public void resetRedirects()
```

##### `resetRunWorkerFirst` <a name="resetRunWorkerFirst" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRunWorkerFirst"></a>

```java
public void resetRunWorkerFirst()
```

##### `resetServeDirectly` <a name="resetServeDirectly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetServeDirectly"></a>

```java
public void resetServeDirectly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headersInput">headersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandlingInput">htmlHandlingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandlingInput">notFoundHandlingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirectsInput">redirectsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirstInput">runWorkerFirstInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectlyInput">serveDirectlyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headers">headers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandling">htmlHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandling">notFoundHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirects">redirects</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirst">runWorkerFirst</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectly">serveDirectly</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headersInput"></a>

```java
public java.lang.String getHeadersInput();
```

- *Type:* java.lang.String

---

##### `htmlHandlingInput`<sup>Optional</sup> <a name="htmlHandlingInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandlingInput"></a>

```java
public java.lang.String getHtmlHandlingInput();
```

- *Type:* java.lang.String

---

##### `notFoundHandlingInput`<sup>Optional</sup> <a name="notFoundHandlingInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandlingInput"></a>

```java
public java.lang.String getNotFoundHandlingInput();
```

- *Type:* java.lang.String

---

##### `redirectsInput`<sup>Optional</sup> <a name="redirectsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirectsInput"></a>

```java
public java.lang.String getRedirectsInput();
```

- *Type:* java.lang.String

---

##### `runWorkerFirstInput`<sup>Optional</sup> <a name="runWorkerFirstInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirstInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getRunWorkerFirstInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `serveDirectlyInput`<sup>Optional</sup> <a name="serveDirectlyInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectlyInput"></a>

```java
public java.lang.Boolean|IResolvable getServeDirectlyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headers"></a>

```java
public java.lang.String getHeaders();
```

- *Type:* java.lang.String

---

##### `htmlHandling`<sup>Required</sup> <a name="htmlHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandling"></a>

```java
public java.lang.String getHtmlHandling();
```

- *Type:* java.lang.String

---

##### `notFoundHandling`<sup>Required</sup> <a name="notFoundHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandling"></a>

```java
public java.lang.String getNotFoundHandling();
```

- *Type:* java.lang.String

---

##### `redirects`<sup>Required</sup> <a name="redirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirects"></a>

```java
public java.lang.String getRedirects();
```

- *Type:* java.lang.String

---

##### `runWorkerFirst`<sup>Required</sup> <a name="runWorkerFirst" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirst"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getRunWorkerFirst();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `serveDirectly`<sup>Required</sup> <a name="serveDirectly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectly"></a>

```java
public java.lang.Boolean|IResolvable getServeDirectly();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptAssetsConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

---


### WorkersScriptAssetsOutputReference <a name="WorkersScriptAssetsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptAssetsOutputReference;

new WorkersScriptAssetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetJwt">resetJwt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig"></a>

```java
public void putConfig(WorkersScriptAssetsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetJwt` <a name="resetJwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetJwt"></a>

```java
public void resetJwt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.assetManifestSha256">assetManifestSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference">WorkersScriptAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwtInput">jwtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwt">jwt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assetManifestSha256`<sup>Required</sup> <a name="assetManifestSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.assetManifestSha256"></a>

```java
public java.lang.String getAssetManifestSha256();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.config"></a>

```java
public WorkersScriptAssetsConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference">WorkersScriptAssetsConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.configInput"></a>

```java
public IResolvable|WorkersScriptAssetsConfig getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `jwtInput`<sup>Optional</sup> <a name="jwtInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwtInput"></a>

```java
public java.lang.String getJwtInput();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptAssets getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

---


### WorkersScriptBindingsList <a name="WorkersScriptBindingsList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptBindingsList;

new WorkersScriptBindingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get"></a>

```java
public WorkersScriptBindingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkersScriptBindings> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>>

---


### WorkersScriptBindingsOutboundOutputReference <a name="WorkersScriptBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptBindingsOutboundOutputReference;

new WorkersScriptBindingsOutboundOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker">putWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetWorker">resetWorker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWorker` <a name="putWorker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker"></a>

```java
public void putWorker(WorkersScriptBindingsOutboundWorker value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

---

##### `resetParams` <a name="resetParams" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetParams"></a>

```java
public void resetParams()
```

##### `resetWorker` <a name="resetWorker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetWorker"></a>

```java
public void resetWorker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference">WorkersScriptBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.paramsInput">paramsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.workerInput">workerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.params">params</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.worker"></a>

```java
public WorkersScriptBindingsOutboundWorkerOutputReference getWorker();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference">WorkersScriptBindingsOutboundWorkerOutputReference</a>

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.paramsInput"></a>

```java
public java.util.List<java.lang.String> getParamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workerInput`<sup>Optional</sup> <a name="workerInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.workerInput"></a>

```java
public IResolvable|WorkersScriptBindingsOutboundWorker getWorkerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.params"></a>

```java
public java.util.List<java.lang.String> getParams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptBindingsOutbound getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

---


### WorkersScriptBindingsOutboundWorkerOutputReference <a name="WorkersScriptBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptBindingsOutboundWorkerOutputReference;

new WorkersScriptBindingsOutboundWorkerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptBindingsOutboundWorker getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

---


### WorkersScriptBindingsOutputReference <a name="WorkersScriptBindingsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptBindingsOutputReference;

new WorkersScriptBindingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound">putOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedDestinationAddresses">resetAllowedDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedSenderAddresses">resetAllowedSenderAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetClassName">resetClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDataset">resetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJson">resetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJurisdiction">resetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyBase64">resetKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyJwk">resetKeyJwk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOldName">resetOldName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOutbound">resetOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPart">resetPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPipeline">resetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetQueueName">resetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetScriptName">resetScriptName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetStoreId">resetStoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetUsages">resetUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetWorkflowName">resetWorkflowName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutbound` <a name="putOutbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound"></a>

```java
public void putOutbound(WorkersScriptBindingsOutbound value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

---

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetAllowedDestinationAddresses` <a name="resetAllowedDestinationAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedDestinationAddresses"></a>

```java
public void resetAllowedDestinationAddresses()
```

##### `resetAllowedSenderAddresses` <a name="resetAllowedSenderAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedSenderAddresses"></a>

```java
public void resetAllowedSenderAddresses()
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetClassName` <a name="resetClassName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetClassName"></a>

```java
public void resetClassName()
```

##### `resetDataset` <a name="resetDataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDataset"></a>

```java
public void resetDataset()
```

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDestinationAddress"></a>

```java
public void resetDestinationAddress()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIndexName` <a name="resetIndexName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetIndexName"></a>

```java
public void resetIndexName()
```

##### `resetJson` <a name="resetJson" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJson"></a>

```java
public void resetJson()
```

##### `resetJurisdiction` <a name="resetJurisdiction" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJurisdiction"></a>

```java
public void resetJurisdiction()
```

##### `resetKeyBase64` <a name="resetKeyBase64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyBase64"></a>

```java
public void resetKeyBase64()
```

##### `resetKeyJwk` <a name="resetKeyJwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyJwk"></a>

```java
public void resetKeyJwk()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespaceId"></a>

```java
public void resetNamespaceId()
```

##### `resetOldName` <a name="resetOldName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOldName"></a>

```java
public void resetOldName()
```

##### `resetOutbound` <a name="resetOutbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOutbound"></a>

```java
public void resetOutbound()
```

##### `resetPart` <a name="resetPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPart"></a>

```java
public void resetPart()
```

##### `resetPipeline` <a name="resetPipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPipeline"></a>

```java
public void resetPipeline()
```

##### `resetQueueName` <a name="resetQueueName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetQueueName"></a>

```java
public void resetQueueName()
```

##### `resetScriptName` <a name="resetScriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetScriptName"></a>

```java
public void resetScriptName()
```

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSecretName"></a>

```java
public void resetSecretName()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetStoreId` <a name="resetStoreId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetStoreId"></a>

```java
public void resetStoreId()
```

##### `resetText` <a name="resetText" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetText"></a>

```java
public void resetText()
```

##### `resetUsages` <a name="resetUsages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetUsages"></a>

```java
public void resetUsages()
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetVersionId"></a>

```java
public void resetVersionId()
```

##### `resetWorkflowName` <a name="resetWorkflowName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetWorkflowName"></a>

```java
public void resetWorkflowName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference">WorkersScriptBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddressesInput">allowedDestinationAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddressesInput">allowedSenderAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.classNameInput">classNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jsonInput">jsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdictionInput">jurisdictionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64Input">keyBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwkInput">keyJwkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceIdInput">namespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldNameInput">oldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outboundInput">outboundInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.partInput">partInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipelineInput">pipelineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueNameInput">queueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptNameInput">scriptNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeIdInput">storeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usagesInput">usagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowNameInput">workflowNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddresses">allowedDestinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddresses">allowedSenderAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.className">className</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.json">json</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64">keyBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwk">keyJwk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldName">oldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.part">part</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipeline">pipeline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueName">queueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeId">storeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usages">usages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outbound"></a>

```java
public WorkersScriptBindingsOutboundOutputReference getOutbound();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference">WorkersScriptBindingsOutboundOutputReference</a>

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `allowedDestinationAddressesInput`<sup>Optional</sup> <a name="allowedDestinationAddressesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDestinationAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedSenderAddressesInput`<sup>Optional</sup> <a name="allowedSenderAddressesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedSenderAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `classNameInput`<sup>Optional</sup> <a name="classNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.classNameInput"></a>

```java
public java.lang.String getClassNameInput();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddressInput"></a>

```java
public java.lang.String getDestinationAddressInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexNameInput"></a>

```java
public java.lang.String getIndexNameInput();
```

- *Type:* java.lang.String

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jsonInput"></a>

```java
public java.lang.String getJsonInput();
```

- *Type:* java.lang.String

---

##### `jurisdictionInput`<sup>Optional</sup> <a name="jurisdictionInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdictionInput"></a>

```java
public java.lang.String getJurisdictionInput();
```

- *Type:* java.lang.String

---

##### `keyBase64Input`<sup>Optional</sup> <a name="keyBase64Input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64Input"></a>

```java
public java.lang.String getKeyBase64Input();
```

- *Type:* java.lang.String

---

##### `keyJwkInput`<sup>Optional</sup> <a name="keyJwkInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwkInput"></a>

```java
public java.lang.String getKeyJwkInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceIdInput"></a>

```java
public java.lang.String getNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `oldNameInput`<sup>Optional</sup> <a name="oldNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldNameInput"></a>

```java
public java.lang.String getOldNameInput();
```

- *Type:* java.lang.String

---

##### `outboundInput`<sup>Optional</sup> <a name="outboundInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outboundInput"></a>

```java
public IResolvable|WorkersScriptBindingsOutbound getOutboundInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

---

##### `partInput`<sup>Optional</sup> <a name="partInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.partInput"></a>

```java
public java.lang.String getPartInput();
```

- *Type:* java.lang.String

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipelineInput"></a>

```java
public java.lang.String getPipelineInput();
```

- *Type:* java.lang.String

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueNameInput"></a>

```java
public java.lang.String getQueueNameInput();
```

- *Type:* java.lang.String

---

##### `scriptNameInput`<sup>Optional</sup> <a name="scriptNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptNameInput"></a>

```java
public java.lang.String getScriptNameInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `storeIdInput`<sup>Optional</sup> <a name="storeIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeIdInput"></a>

```java
public java.lang.String getStoreIdInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usagesInput`<sup>Optional</sup> <a name="usagesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usagesInput"></a>

```java
public java.util.List<java.lang.String> getUsagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `workflowNameInput`<sup>Optional</sup> <a name="workflowNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowNameInput"></a>

```java
public java.lang.String getWorkflowNameInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `allowedDestinationAddresses`<sup>Required</sup> <a name="allowedDestinationAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedSenderAddresses`<sup>Required</sup> <a name="allowedSenderAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedSenderAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `className`<sup>Required</sup> <a name="className" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.className"></a>

```java
public java.lang.String getClassName();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdiction"></a>

```java
public java.lang.String getJurisdiction();
```

- *Type:* java.lang.String

---

##### `keyBase64`<sup>Required</sup> <a name="keyBase64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64"></a>

```java
public java.lang.String getKeyBase64();
```

- *Type:* java.lang.String

---

##### `keyJwk`<sup>Required</sup> <a name="keyJwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwk"></a>

```java
public java.lang.String getKeyJwk();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `oldName`<sup>Required</sup> <a name="oldName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldName"></a>

```java
public java.lang.String getOldName();
```

- *Type:* java.lang.String

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.part"></a>

```java
public java.lang.String getPart();
```

- *Type:* java.lang.String

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipeline"></a>

```java
public java.lang.String getPipeline();
```

- *Type:* java.lang.String

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeId"></a>

```java
public java.lang.String getStoreId();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usages"></a>

```java
public java.util.List<java.lang.String> getUsages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptBindings getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>

---


### WorkersScriptLimitsOutputReference <a name="WorkersScriptLimitsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptLimitsOutputReference;

new WorkersScriptLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resetCpuMs">resetCpuMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuMs` <a name="resetCpuMs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resetCpuMs"></a>

```java
public void resetCpuMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMsInput">cpuMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMs">cpuMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuMsInput`<sup>Optional</sup> <a name="cpuMsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMsInput"></a>

```java
public java.lang.Number getCpuMsInput();
```

- *Type:* java.lang.Number

---

##### `cpuMs`<sup>Required</sup> <a name="cpuMs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMs"></a>

```java
public java.lang.Number getCpuMs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptLimits getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

---


### WorkersScriptMigrationsOutputReference <a name="WorkersScriptMigrationsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsOutputReference;

new WorkersScriptMigrationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses">putRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses">putTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetDeletedClasses">resetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewClasses">resetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewSqliteClasses">resetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewTag">resetNewTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetOldTag">resetOldTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetRenamedClasses">resetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetSteps">resetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetTransferredClasses">resetTransferredClasses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRenamedClasses` <a name="putRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses"></a>

```java
public void putRenamedClasses(IResolvable|java.util.List<WorkersScriptMigrationsRenamedClasses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>>

---

##### `putSteps` <a name="putSteps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps"></a>

```java
public void putSteps(IResolvable|java.util.List<WorkersScriptMigrationsSteps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>>

---

##### `putTransferredClasses` <a name="putTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses"></a>

```java
public void putTransferredClasses(IResolvable|java.util.List<WorkersScriptMigrationsTransferredClasses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>>

---

##### `resetDeletedClasses` <a name="resetDeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetDeletedClasses"></a>

```java
public void resetDeletedClasses()
```

##### `resetNewClasses` <a name="resetNewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewClasses"></a>

```java
public void resetNewClasses()
```

##### `resetNewSqliteClasses` <a name="resetNewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewSqliteClasses"></a>

```java
public void resetNewSqliteClasses()
```

##### `resetNewTag` <a name="resetNewTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewTag"></a>

```java
public void resetNewTag()
```

##### `resetOldTag` <a name="resetOldTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetOldTag"></a>

```java
public void resetOldTag()
```

##### `resetRenamedClasses` <a name="resetRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetRenamedClasses"></a>

```java
public void resetRenamedClasses()
```

##### `resetSteps` <a name="resetSteps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetSteps"></a>

```java
public void resetSteps()
```

##### `resetTransferredClasses` <a name="resetTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetTransferredClasses"></a>

```java
public void resetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList">WorkersScriptMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList">WorkersScriptMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList">WorkersScriptMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClassesInput">deletedClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClassesInput">newClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClassesInput">newSqliteClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTagInput">newTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTagInput">oldTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClassesInput">renamedClassesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.stepsInput">stepsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClassesInput">transferredClassesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClasses">newClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTag">newTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTag">oldTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClasses"></a>

```java
public WorkersScriptMigrationsRenamedClassesList getRenamedClasses();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList">WorkersScriptMigrationsRenamedClassesList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.steps"></a>

```java
public WorkersScriptMigrationsStepsList getSteps();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList">WorkersScriptMigrationsStepsList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClasses"></a>

```java
public WorkersScriptMigrationsTransferredClassesList getTransferredClasses();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList">WorkersScriptMigrationsTransferredClassesList</a>

---

##### `deletedClassesInput`<sup>Optional</sup> <a name="deletedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClassesInput"></a>

```java
public java.util.List<java.lang.String> getDeletedClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newClassesInput`<sup>Optional</sup> <a name="newClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClassesInput"></a>

```java
public java.util.List<java.lang.String> getNewClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newSqliteClassesInput`<sup>Optional</sup> <a name="newSqliteClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClassesInput"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newTagInput`<sup>Optional</sup> <a name="newTagInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTagInput"></a>

```java
public java.lang.String getNewTagInput();
```

- *Type:* java.lang.String

---

##### `oldTagInput`<sup>Optional</sup> <a name="oldTagInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTagInput"></a>

```java
public java.lang.String getOldTagInput();
```

- *Type:* java.lang.String

---

##### `renamedClassesInput`<sup>Optional</sup> <a name="renamedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClassesInput"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsRenamedClasses> getRenamedClassesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>>

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.stepsInput"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsSteps> getStepsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>>

---

##### `transferredClassesInput`<sup>Optional</sup> <a name="transferredClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClassesInput"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsTransferredClasses> getTransferredClassesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>>

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClasses"></a>

```java
public java.util.List<java.lang.String> getDeletedClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClasses"></a>

```java
public java.util.List<java.lang.String> getNewClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClasses"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newTag`<sup>Required</sup> <a name="newTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTag"></a>

```java
public java.lang.String getNewTag();
```

- *Type:* java.lang.String

---

##### `oldTag`<sup>Required</sup> <a name="oldTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTag"></a>

```java
public java.lang.String getOldTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptMigrations getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

---


### WorkersScriptMigrationsRenamedClassesList <a name="WorkersScriptMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsRenamedClassesList;

new WorkersScriptMigrationsRenamedClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get"></a>

```java
public WorkersScriptMigrationsRenamedClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsRenamedClasses> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>>

---


### WorkersScriptMigrationsRenamedClassesOutputReference <a name="WorkersScriptMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsRenamedClassesOutputReference;

new WorkersScriptMigrationsRenamedClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.toInput">toInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.toInput"></a>

```java
public java.lang.String getToInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptMigrationsRenamedClasses getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>

---


### WorkersScriptMigrationsStepsList <a name="WorkersScriptMigrationsStepsList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsStepsList;

new WorkersScriptMigrationsStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get"></a>

```java
public WorkersScriptMigrationsStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsSteps> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>>

---


### WorkersScriptMigrationsStepsOutputReference <a name="WorkersScriptMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsStepsOutputReference;

new WorkersScriptMigrationsStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses">putRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses">putTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetDeletedClasses">resetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewClasses">resetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewSqliteClasses">resetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetRenamedClasses">resetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetTransferredClasses">resetTransferredClasses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRenamedClasses` <a name="putRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses"></a>

```java
public void putRenamedClasses(IResolvable|java.util.List<WorkersScriptMigrationsStepsRenamedClasses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>>

---

##### `putTransferredClasses` <a name="putTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses"></a>

```java
public void putTransferredClasses(IResolvable|java.util.List<WorkersScriptMigrationsStepsTransferredClasses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>>

---

##### `resetDeletedClasses` <a name="resetDeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetDeletedClasses"></a>

```java
public void resetDeletedClasses()
```

##### `resetNewClasses` <a name="resetNewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewClasses"></a>

```java
public void resetNewClasses()
```

##### `resetNewSqliteClasses` <a name="resetNewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewSqliteClasses"></a>

```java
public void resetNewSqliteClasses()
```

##### `resetRenamedClasses` <a name="resetRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetRenamedClasses"></a>

```java
public void resetRenamedClasses()
```

##### `resetTransferredClasses` <a name="resetTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetTransferredClasses"></a>

```java
public void resetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList">WorkersScriptMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList">WorkersScriptMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClassesInput">deletedClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClassesInput">newClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClassesInput">newSqliteClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClassesInput">renamedClassesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClassesInput">transferredClassesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClasses">newClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClasses"></a>

```java
public WorkersScriptMigrationsStepsRenamedClassesList getRenamedClasses();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList">WorkersScriptMigrationsStepsRenamedClassesList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClasses"></a>

```java
public WorkersScriptMigrationsStepsTransferredClassesList getTransferredClasses();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList">WorkersScriptMigrationsStepsTransferredClassesList</a>

---

##### `deletedClassesInput`<sup>Optional</sup> <a name="deletedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClassesInput"></a>

```java
public java.util.List<java.lang.String> getDeletedClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newClassesInput`<sup>Optional</sup> <a name="newClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClassesInput"></a>

```java
public java.util.List<java.lang.String> getNewClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newSqliteClassesInput`<sup>Optional</sup> <a name="newSqliteClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClassesInput"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renamedClassesInput`<sup>Optional</sup> <a name="renamedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClassesInput"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsStepsRenamedClasses> getRenamedClassesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>>

---

##### `transferredClassesInput`<sup>Optional</sup> <a name="transferredClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClassesInput"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsStepsTransferredClasses> getTransferredClassesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>>

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClasses"></a>

```java
public java.util.List<java.lang.String> getDeletedClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClasses"></a>

```java
public java.util.List<java.lang.String> getNewClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptMigrationsSteps getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>

---


### WorkersScriptMigrationsStepsRenamedClassesList <a name="WorkersScriptMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsStepsRenamedClassesList;

new WorkersScriptMigrationsStepsRenamedClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get"></a>

```java
public WorkersScriptMigrationsStepsRenamedClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsStepsRenamedClasses> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>>

---


### WorkersScriptMigrationsStepsRenamedClassesOutputReference <a name="WorkersScriptMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsStepsRenamedClassesOutputReference;

new WorkersScriptMigrationsStepsRenamedClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.toInput">toInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.toInput"></a>

```java
public java.lang.String getToInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptMigrationsStepsRenamedClasses getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>

---


### WorkersScriptMigrationsStepsTransferredClassesList <a name="WorkersScriptMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsStepsTransferredClassesList;

new WorkersScriptMigrationsStepsTransferredClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get"></a>

```java
public WorkersScriptMigrationsStepsTransferredClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsStepsTransferredClasses> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>>

---


### WorkersScriptMigrationsStepsTransferredClassesOutputReference <a name="WorkersScriptMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsStepsTransferredClassesOutputReference;

new WorkersScriptMigrationsStepsTransferredClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFromScript">resetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetFromScript` <a name="resetFromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFromScript"></a>

```java
public void resetFromScript()
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput">fromScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.toInput">toInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `fromScriptInput`<sup>Optional</sup> <a name="fromScriptInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput"></a>

```java
public java.lang.String getFromScriptInput();
```

- *Type:* java.lang.String

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.toInput"></a>

```java
public java.lang.String getToInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```java
public java.lang.String getFromScript();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptMigrationsStepsTransferredClasses getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>

---


### WorkersScriptMigrationsTransferredClassesList <a name="WorkersScriptMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsTransferredClassesList;

new WorkersScriptMigrationsTransferredClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get"></a>

```java
public WorkersScriptMigrationsTransferredClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkersScriptMigrationsTransferredClasses> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>>

---


### WorkersScriptMigrationsTransferredClassesOutputReference <a name="WorkersScriptMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptMigrationsTransferredClassesOutputReference;

new WorkersScriptMigrationsTransferredClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFromScript">resetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetFromScript` <a name="resetFromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFromScript"></a>

```java
public void resetFromScript()
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScriptInput">fromScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.toInput">toInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `fromScriptInput`<sup>Optional</sup> <a name="fromScriptInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScriptInput"></a>

```java
public java.lang.String getFromScriptInput();
```

- *Type:* java.lang.String

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.toInput"></a>

```java
public java.lang.String getToInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```java
public java.lang.String getFromScript();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptMigrationsTransferredClasses getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>

---


### WorkersScriptNamedHandlersList <a name="WorkersScriptNamedHandlersList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptNamedHandlersList;

new WorkersScriptNamedHandlersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get"></a>

```java
public WorkersScriptNamedHandlersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WorkersScriptNamedHandlersOutputReference <a name="WorkersScriptNamedHandlersOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptNamedHandlersOutputReference;

new WorkersScriptNamedHandlersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.handlers">handlers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers">WorkersScriptNamedHandlers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.handlers"></a>

```java
public java.util.List<java.lang.String> getHandlers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.internalValue"></a>

```java
public WorkersScriptNamedHandlers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers">WorkersScriptNamedHandlers</a>

---


### WorkersScriptObservabilityLogsOutputReference <a name="WorkersScriptObservabilityLogsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptObservabilityLogsOutputReference;

new WorkersScriptObservabilityLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetHeadSamplingRate">resetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetPersist">resetPersist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinations` <a name="resetDestinations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetHeadSamplingRate` <a name="resetHeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetHeadSamplingRate"></a>

```java
public void resetHeadSamplingRate()
```

##### `resetPersist` <a name="resetPersist" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetPersist"></a>

```java
public void resetPersist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRateInput">headSamplingRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogsInput">invocationLogsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persistInput">persistInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinations">destinations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRate">headSamplingRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogs">invocationLogs</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persist">persist</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinationsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `headSamplingRateInput`<sup>Optional</sup> <a name="headSamplingRateInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRateInput"></a>

```java
public java.lang.Number getHeadSamplingRateInput();
```

- *Type:* java.lang.Number

---

##### `invocationLogsInput`<sup>Optional</sup> <a name="invocationLogsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogsInput"></a>

```java
public java.lang.Boolean|IResolvable getInvocationLogsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `persistInput`<sup>Optional</sup> <a name="persistInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persistInput"></a>

```java
public java.lang.Boolean|IResolvable getPersistInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinations"></a>

```java
public java.util.List<java.lang.String> getDestinations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `headSamplingRate`<sup>Required</sup> <a name="headSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRate"></a>

```java
public java.lang.Number getHeadSamplingRate();
```

- *Type:* java.lang.Number

---

##### `invocationLogs`<sup>Required</sup> <a name="invocationLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogs"></a>

```java
public java.lang.Boolean|IResolvable getInvocationLogs();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `persist`<sup>Required</sup> <a name="persist" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persist"></a>

```java
public java.lang.Boolean|IResolvable getPersist();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptObservabilityLogs getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

---


### WorkersScriptObservabilityOutputReference <a name="WorkersScriptObservabilityOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptObservabilityOutputReference;

new WorkersScriptObservabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs">putLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetHeadSamplingRate">resetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetLogs">resetLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogs` <a name="putLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs"></a>

```java
public void putLogs(WorkersScriptObservabilityLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

---

##### `resetHeadSamplingRate` <a name="resetHeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetHeadSamplingRate"></a>

```java
public void resetHeadSamplingRate()
```

##### `resetLogs` <a name="resetLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetLogs"></a>

```java
public void resetLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference">WorkersScriptObservabilityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRateInput">headSamplingRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logsInput">logsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRate">headSamplingRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logs"></a>

```java
public WorkersScriptObservabilityLogsOutputReference getLogs();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference">WorkersScriptObservabilityLogsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `headSamplingRateInput`<sup>Optional</sup> <a name="headSamplingRateInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRateInput"></a>

```java
public java.lang.Number getHeadSamplingRateInput();
```

- *Type:* java.lang.Number

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logsInput"></a>

```java
public IResolvable|WorkersScriptObservabilityLogs getLogsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `headSamplingRate`<sup>Required</sup> <a name="headSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRate"></a>

```java
public java.lang.Number getHeadSamplingRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptObservability getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

---


### WorkersScriptPlacementOutputReference <a name="WorkersScriptPlacementOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptPlacementOutputReference;

new WorkersScriptPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.lastAnalyzedAt">lastAnalyzedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastAnalyzedAt`<sup>Required</sup> <a name="lastAnalyzedAt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.lastAnalyzedAt"></a>

```java
public java.lang.String getLastAnalyzedAt();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptPlacement getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

---


### WorkersScriptTailConsumersList <a name="WorkersScriptTailConsumersList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptTailConsumersList;

new WorkersScriptTailConsumersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get"></a>

```java
public WorkersScriptTailConsumersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkersScriptTailConsumers> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>>

---


### WorkersScriptTailConsumersOutputReference <a name="WorkersScriptTailConsumersOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.workers_script.WorkersScriptTailConsumersOutputReference;

new WorkersScriptTailConsumersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkersScriptTailConsumers getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>

---



