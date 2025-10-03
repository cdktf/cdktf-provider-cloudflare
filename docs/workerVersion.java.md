# `workerVersion` Submodule <a name="`workerVersion` Submodule" id="@cdktf/provider-cloudflare.workerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkerVersion <a name="WorkerVersion" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version cloudflare_worker_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersion;

WorkerVersion.Builder.create(Construct scope, java.lang.String id)
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
    .workerId(java.lang.String)
//  .annotations(WorkerVersionAnnotations)
//  .assets(WorkerVersionAssets)
//  .bindings(IResolvable)
//  .bindings(java.util.List<WorkerVersionBindings>)
//  .compatibilityDate(java.lang.String)
//  .compatibilityFlags(java.util.List<java.lang.String>)
//  .limits(WorkerVersionLimits)
//  .mainModule(java.lang.String)
//  .migrations(WorkerVersionMigrations)
//  .modules(IResolvable)
//  .modules(java.util.List<WorkerVersionModules>)
//  .placement(WorkerVersionPlacement)
//  .usageModel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.workerId">workerId</a></code> | <code>java.lang.String</code> | Identifier for the Worker, which can be ID or name. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | Metadata about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.bindings">bindings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>></code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | Resource limits enforced at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.mainModule">mainModule</a></code> | <code>java.lang.String</code> | The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.modules">modules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>></code> | Code, sourcemaps, and other content used at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | Placement settings for the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.usageModel">usageModel</a></code> | <code>java.lang.String</code> | Usage model for the version. Available values: "standard", "bundled", "unbound". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#account_id WorkerVersion#account_id}

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.workerId"></a>

- *Type:* java.lang.String

Identifier for the Worker, which can be ID or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#worker_id WorkerVersion#worker_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.annotations"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

Metadata about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#annotations WorkerVersion#annotations}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.assets"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

Configuration for assets within a Worker.

[`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and
[`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files should be
included as modules named `_headers` and `_redirects` with content type `text/plain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#assets WorkerVersion#assets}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.bindings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>>

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#bindings WorkerVersion#bindings}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.compatibilityDate"></a>

- *Type:* java.lang.String

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#compatibility_date WorkerVersion#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.compatibilityFlags"></a>

- *Type:* java.util.List<java.lang.String>

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#compatibility_flags WorkerVersion#compatibility_flags}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.limits"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

Resource limits enforced at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#limits WorkerVersion#limits}

---

##### `mainModule`<sup>Optional</sup> <a name="mainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.mainModule"></a>

- *Type:* java.lang.String

The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#main_module WorkerVersion#main_module}

---

##### `migrations`<sup>Optional</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.migrations"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#migrations WorkerVersion#migrations}

---

##### `modules`<sup>Optional</sup> <a name="modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.modules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>>

Code, sourcemaps, and other content used at runtime.

This includes [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and
[`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files used to configure
[Static Assets](https://developers.cloudflare.com/workers/static-assets/). `_headers` and `_redirects` files should be
included as modules named `_headers` and `_redirects` with content type `text/plain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#modules WorkerVersion#modules}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

Placement settings for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#placement WorkerVersion#placement}

---

##### `usageModel`<sup>Optional</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.usageModel"></a>

- *Type:* java.lang.String

Usage model for the version. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#usage_model WorkerVersion#usage_model}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations">putAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets">putAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings">putBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations">putMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules">putModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAssets">resetAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetBindings">resetBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityDate">resetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityFlags">resetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMainModule">resetMainModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMigrations">resetMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetModules">resetModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetUsageModel">resetUsageModel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnnotations` <a name="putAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations"></a>

```java
public void putAnnotations(WorkerVersionAnnotations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

---

##### `putAssets` <a name="putAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets"></a>

```java
public void putAssets(WorkerVersionAssets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

---

##### `putBindings` <a name="putBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings"></a>

```java
public void putBindings(IResolvable OR java.util.List<WorkerVersionBindings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>>

---

##### `putLimits` <a name="putLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits"></a>

```java
public void putLimits(WorkerVersionLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

---

##### `putMigrations` <a name="putMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations"></a>

```java
public void putMigrations(WorkerVersionMigrations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

---

##### `putModules` <a name="putModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules"></a>

```java
public void putModules(IResolvable OR java.util.List<WorkerVersionModules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>>

---

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement"></a>

```java
public void putPlacement(WorkerVersionPlacement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAssets` <a name="resetAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAssets"></a>

```java
public void resetAssets()
```

##### `resetBindings` <a name="resetBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetBindings"></a>

```java
public void resetBindings()
```

##### `resetCompatibilityDate` <a name="resetCompatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityDate"></a>

```java
public void resetCompatibilityDate()
```

##### `resetCompatibilityFlags` <a name="resetCompatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityFlags"></a>

```java
public void resetCompatibilityFlags()
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetLimits"></a>

```java
public void resetLimits()
```

##### `resetMainModule` <a name="resetMainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMainModule"></a>

```java
public void resetMainModule()
```

##### `resetMigrations` <a name="resetMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMigrations"></a>

```java
public void resetMigrations()
```

##### `resetModules` <a name="resetModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetModules"></a>

```java
public void resetModules()
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetPlacement"></a>

```java
public void resetPlacement()
```

##### `resetUsageModel` <a name="resetUsageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetUsageModel"></a>

```java
public void resetUsageModel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersion;

WorkerVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersion;

WorkerVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersion;

WorkerVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersion;

WorkerVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkerVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkerVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WorkerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference">WorkerVersionAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference">WorkerVersionAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindings">bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList">WorkerVersionBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference">WorkerVersionLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference">WorkerVersionMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modules">modules</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList">WorkerVersionModulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.number">number</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference">WorkerVersionPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotationsInput">annotationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assetsInput">assetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindingsInput">bindingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDateInput">compatibilityDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlagsInput">compatibilityFlagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limitsInput">limitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModuleInput">mainModuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrationsInput">migrationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modulesInput">modulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placementInput">placementInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModelInput">usageModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerIdInput">workerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModule">mainModule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModel">usageModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerId">workerId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotations"></a>

```java
public WorkerVersionAnnotationsOutputReference getAnnotations();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference">WorkerVersionAnnotationsOutputReference</a>

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assets"></a>

```java
public WorkerVersionAssetsOutputReference getAssets();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference">WorkerVersionAssetsOutputReference</a>

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindings"></a>

```java
public WorkerVersionBindingsList getBindings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList">WorkerVersionBindingsList</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limits"></a>

```java
public WorkerVersionLimitsOutputReference getLimits();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference">WorkerVersionLimitsOutputReference</a>

---

##### `migrations`<sup>Required</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrations"></a>

```java
public WorkerVersionMigrationsOutputReference getMigrations();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference">WorkerVersionMigrationsOutputReference</a>

---

##### `modules`<sup>Required</sup> <a name="modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modules"></a>

```java
public WorkerVersionModulesList getModules();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList">WorkerVersionModulesList</a>

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.number"></a>

```java
public java.lang.Number getNumber();
```

- *Type:* java.lang.Number

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placement"></a>

```java
public WorkerVersionPlacementOutputReference getPlacement();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference">WorkerVersionPlacementOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotationsInput"></a>

```java
public java.lang.Object getAnnotationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

---

##### `assetsInput`<sup>Optional</sup> <a name="assetsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assetsInput"></a>

```java
public java.lang.Object getAssetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

---

##### `bindingsInput`<sup>Optional</sup> <a name="bindingsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindingsInput"></a>

```java
public java.lang.Object getBindingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>>

---

##### `compatibilityDateInput`<sup>Optional</sup> <a name="compatibilityDateInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDateInput"></a>

```java
public java.lang.String getCompatibilityDateInput();
```

- *Type:* java.lang.String

---

##### `compatibilityFlagsInput`<sup>Optional</sup> <a name="compatibilityFlagsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlagsInput"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limitsInput"></a>

```java
public java.lang.Object getLimitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

---

##### `mainModuleInput`<sup>Optional</sup> <a name="mainModuleInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModuleInput"></a>

```java
public java.lang.String getMainModuleInput();
```

- *Type:* java.lang.String

---

##### `migrationsInput`<sup>Optional</sup> <a name="migrationsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrationsInput"></a>

```java
public java.lang.Object getMigrationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

---

##### `modulesInput`<sup>Optional</sup> <a name="modulesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modulesInput"></a>

```java
public java.lang.Object getModulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>>

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placementInput"></a>

```java
public java.lang.Object getPlacementInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

---

##### `usageModelInput`<sup>Optional</sup> <a name="usageModelInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModelInput"></a>

```java
public java.lang.String getUsageModelInput();
```

- *Type:* java.lang.String

---

##### `workerIdInput`<sup>Optional</sup> <a name="workerIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerIdInput"></a>

```java
public java.lang.String getWorkerIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDate"></a>

```java
public java.lang.String getCompatibilityDate();
```

- *Type:* java.lang.String

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlags"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mainModule`<sup>Required</sup> <a name="mainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModule"></a>

```java
public java.lang.String getMainModule();
```

- *Type:* java.lang.String

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModel"></a>

```java
public java.lang.String getUsageModel();
```

- *Type:* java.lang.String

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerId"></a>

```java
public java.lang.String getWorkerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerVersionAnnotations <a name="WorkerVersionAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionAnnotations;

WorkerVersionAnnotations.builder()
//  .workersMessage(java.lang.String)
//  .workersTag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersMessage">workersMessage</a></code> | <code>java.lang.String</code> | Human-readable message about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersTag">workersTag</a></code> | <code>java.lang.String</code> | User-provided identifier for the version. |

---

##### `workersMessage`<sup>Optional</sup> <a name="workersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersMessage"></a>

```java
public java.lang.String getWorkersMessage();
```

- *Type:* java.lang.String

Human-readable message about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#workers_message WorkerVersion#workers_message}

---

##### `workersTag`<sup>Optional</sup> <a name="workersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersTag"></a>

```java
public java.lang.String getWorkersTag();
```

- *Type:* java.lang.String

User-provided identifier for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#workers_tag WorkerVersion#workers_tag}

---

### WorkerVersionAssets <a name="WorkerVersionAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionAssets;

WorkerVersionAssets.builder()
//  .config(WorkerVersionAssetsConfig)
//  .directory(java.lang.String)
//  .jwt(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.directory">directory</a></code> | <code>java.lang.String</code> | Path to the directory containing asset files to upload. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.jwt">jwt</a></code> | <code>java.lang.String</code> | Token provided upon successful upload of all files from a registered manifest. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.config"></a>

```java
public WorkerVersionAssetsConfig getConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#config WorkerVersion#config}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Path to the directory containing asset files to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#directory WorkerVersion#directory}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#jwt WorkerVersion#jwt}

---

### WorkerVersionAssetsConfig <a name="WorkerVersionAssetsConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionAssetsConfig;

WorkerVersionAssetsConfig.builder()
//  .htmlHandling(java.lang.String)
//  .notFoundHandling(java.lang.String)
//  .runWorkerFirst(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.htmlHandling">htmlHandling</a></code> | <code>java.lang.String</code> | Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.notFoundHandling">notFoundHandling</a></code> | <code>java.lang.String</code> | Determines the response when a request does not match a static asset, and there is no Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.runWorkerFirst">runWorkerFirst</a></code> | <code>java.util.List<java.lang.String></code> | Contains a list path rules to control routing to either the Worker or assets. |

---

##### `htmlHandling`<sup>Optional</sup> <a name="htmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.htmlHandling"></a>

```java
public java.lang.String getHtmlHandling();
```

- *Type:* java.lang.String

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#html_handling WorkerVersion#html_handling}

---

##### `notFoundHandling`<sup>Optional</sup> <a name="notFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.notFoundHandling"></a>

```java
public java.lang.String getNotFoundHandling();
```

- *Type:* java.lang.String

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#not_found_handling WorkerVersion#not_found_handling}

---

##### `runWorkerFirst`<sup>Optional</sup> <a name="runWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.runWorkerFirst"></a>

```java
public java.util.List<java.lang.String> getRunWorkerFirst();
```

- *Type:* java.util.List<java.lang.String>

Contains a list path rules to control routing to either the Worker or assets.

Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#run_worker_first WorkerVersion#run_worker_first}

---

### WorkerVersionBindings <a name="WorkerVersionBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionBindings;

WorkerVersionBindings.builder()
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
//  .outbound(WorkerVersionBindingsOutbound)
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
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.name">name</a></code> | <code>java.lang.String</code> | A JavaScript variable name for the binding. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.type">type</a></code> | <code>java.lang.String</code> | The kind of resource that the binding provides. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedDestinationAddresses">allowedDestinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed destination addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedSenderAddresses">allowedSenderAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed sender addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | R2 bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Identifier of the certificate to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.className">className</a></code> | <code>java.lang.String</code> | The exported class name of the Durable Object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.dataset">dataset</a></code> | <code>java.lang.String</code> | The name of the dataset to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | Destination address for the email. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.environment">environment</a></code> | <code>java.lang.String</code> | The environment of the script_name to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.format">format</a></code> | <code>java.lang.String</code> | Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.id">id</a></code> | <code>java.lang.String</code> | Identifier of the D1 database to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.indexName">indexName</a></code> | <code>java.lang.String</code> | Name of the Vectorize index to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.json">json</a></code> | <code>java.lang.String</code> | JSON data to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyBase64">keyBase64</a></code> | <code>java.lang.String</code> | Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyJwk">keyJwk</a></code> | <code>java.lang.String</code> | Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | Namespace identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.oldName">oldName</a></code> | <code>java.lang.String</code> | The old name of the inherited binding. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a></code> | Outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.part">part</a></code> | <code>java.lang.String</code> | The name of the file containing the data content. Only accepted for `service worker syntax` Workers. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.pipeline">pipeline</a></code> | <code>java.lang.String</code> | Name of the Pipeline to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.queueName">queueName</a></code> | <code>java.lang.String</code> | Name of the Queue to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | The script where the Durable Object is defined, if it is external to this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the secret in the store. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.service">service</a></code> | <code>java.lang.String</code> | Name of Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.storeId">storeId</a></code> | <code>java.lang.String</code> | ID of the store containing the secret. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.text">text</a></code> | <code>java.lang.String</code> | The text value to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.usages">usages</a></code> | <code>java.util.List<java.lang.String></code> | Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.versionId">versionId</a></code> | <code>java.lang.String</code> | Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | Name of the Workflow to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A JavaScript variable name for the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#name WorkerVersion#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The kind of resource that the binding provides.

Available values: "ai", "analytics_engine", "assets", "browser", "d1", "data_blob", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "inherit", "images", "json", "kv_namespace", "mtls_certificate", "plain_text", "pipelines", "queue", "r2_bucket", "secret_text", "send_email", "service", "tail_consumer", "text_blob", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow", "wasm_module".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#type WorkerVersion#type}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#algorithm WorkerVersion#algorithm}

---

##### `allowedDestinationAddresses`<sup>Optional</sup> <a name="allowedDestinationAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedDestinationAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of allowed destination addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#allowed_destination_addresses WorkerVersion#allowed_destination_addresses}

---

##### `allowedSenderAddresses`<sup>Optional</sup> <a name="allowedSenderAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedSenderAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedSenderAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of allowed sender addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#allowed_sender_addresses WorkerVersion#allowed_sender_addresses}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

R2 bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#bucket_name WorkerVersion#bucket_name}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Identifier of the certificate to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#certificate_id WorkerVersion#certificate_id}

---

##### `className`<sup>Optional</sup> <a name="className" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.className"></a>

```java
public java.lang.String getClassName();
```

- *Type:* java.lang.String

The exported class name of the Durable Object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#class_name WorkerVersion#class_name}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

The name of the dataset to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#dataset WorkerVersion#dataset}

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

Destination address for the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#destination_address WorkerVersion#destination_address}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The environment of the script_name to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#environment WorkerVersion#environment}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#format WorkerVersion#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Identifier of the D1 database to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#id WorkerVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

Name of the Vectorize index to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#index_name WorkerVersion#index_name}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

JSON data to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#json WorkerVersion#json}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.jurisdiction"></a>

```java
public java.lang.String getJurisdiction();
```

- *Type:* java.lang.String

The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#jurisdiction WorkerVersion#jurisdiction}

---

##### `keyBase64`<sup>Optional</sup> <a name="keyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyBase64"></a>

```java
public java.lang.String getKeyBase64();
```

- *Type:* java.lang.String

Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#key_base64 WorkerVersion#key_base64}

---

##### `keyJwk`<sup>Optional</sup> <a name="keyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyJwk"></a>

```java
public java.lang.String getKeyJwk();
```

- *Type:* java.lang.String

Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#key_jwk WorkerVersion#key_jwk}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#namespace WorkerVersion#namespace}

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

Namespace identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#namespace_id WorkerVersion#namespace_id}

---

##### `oldName`<sup>Optional</sup> <a name="oldName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.oldName"></a>

```java
public java.lang.String getOldName();
```

- *Type:* java.lang.String

The old name of the inherited binding.

If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#old_name WorkerVersion#old_name}

---

##### `outbound`<sup>Optional</sup> <a name="outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.outbound"></a>

```java
public WorkerVersionBindingsOutbound getOutbound();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#outbound WorkerVersion#outbound}

---

##### `part`<sup>Optional</sup> <a name="part" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.part"></a>

```java
public java.lang.String getPart();
```

- *Type:* java.lang.String

The name of the file containing the data content. Only accepted for `service worker syntax` Workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#part WorkerVersion#part}

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.pipeline"></a>

```java
public java.lang.String getPipeline();
```

- *Type:* java.lang.String

Name of the Pipeline to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#pipeline WorkerVersion#pipeline}

---

##### `queueName`<sup>Optional</sup> <a name="queueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

Name of the Queue to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#queue_name WorkerVersion#queue_name}

---

##### `scriptName`<sup>Optional</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

The script where the Durable Object is defined, if it is external to this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#script_name WorkerVersion#script_name}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Name of the secret in the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#secret_name WorkerVersion#secret_name}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Name of Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#service WorkerVersion#service}

---

##### `storeId`<sup>Optional</sup> <a name="storeId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.storeId"></a>

```java
public java.lang.String getStoreId();
```

- *Type:* java.lang.String

ID of the store containing the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#store_id WorkerVersion#store_id}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

The text value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#text WorkerVersion#text}

---

##### `usages`<sup>Optional</sup> <a name="usages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.usages"></a>

```java
public java.util.List<java.lang.String> getUsages();
```

- *Type:* java.util.List<java.lang.String>

Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#usages WorkerVersion#usages}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version.

Defaults to inheriting the binding from the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#version_id WorkerVersion#version_id}

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

Name of the Workflow to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#workflow_name WorkerVersion#workflow_name}

---

### WorkerVersionBindingsOutbound <a name="WorkerVersionBindingsOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionBindingsOutbound;

WorkerVersionBindingsOutbound.builder()
//  .params(java.util.List<java.lang.String>)
//  .worker(WorkerVersionBindingsOutboundWorker)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.params">params</a></code> | <code>java.util.List<java.lang.String></code> | Pass information from the Dispatch Worker to the Outbound Worker through the parameters. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a></code> | Outbound worker. |

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.params"></a>

```java
public java.util.List<java.lang.String> getParams();
```

- *Type:* java.util.List<java.lang.String>

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#params WorkerVersion#params}

---

##### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.worker"></a>

```java
public WorkerVersionBindingsOutboundWorker getWorker();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#worker WorkerVersion#worker}

---

### WorkerVersionBindingsOutboundWorker <a name="WorkerVersionBindingsOutboundWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionBindingsOutboundWorker;

WorkerVersionBindingsOutboundWorker.builder()
//  .environment(java.lang.String)
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.environment">environment</a></code> | <code>java.lang.String</code> | Environment of the outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.service">service</a></code> | <code>java.lang.String</code> | Name of the outbound worker. |

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#environment WorkerVersion#environment}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#service WorkerVersion#service}

---

### WorkerVersionConfig <a name="WorkerVersionConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionConfig;

WorkerVersionConfig.builder()
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
    .workerId(java.lang.String)
//  .annotations(WorkerVersionAnnotations)
//  .assets(WorkerVersionAssets)
//  .bindings(IResolvable)
//  .bindings(java.util.List<WorkerVersionBindings>)
//  .compatibilityDate(java.lang.String)
//  .compatibilityFlags(java.util.List<java.lang.String>)
//  .limits(WorkerVersionLimits)
//  .mainModule(java.lang.String)
//  .migrations(WorkerVersionMigrations)
//  .modules(IResolvable)
//  .modules(java.util.List<WorkerVersionModules>)
//  .placement(WorkerVersionPlacement)
//  .usageModel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.workerId">workerId</a></code> | <code>java.lang.String</code> | Identifier for the Worker, which can be ID or name. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | Metadata about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.bindings">bindings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>></code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | Resource limits enforced at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.mainModule">mainModule</a></code> | <code>java.lang.String</code> | The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.modules">modules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>></code> | Code, sourcemaps, and other content used at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | Placement settings for the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.usageModel">usageModel</a></code> | <code>java.lang.String</code> | Usage model for the version. Available values: "standard", "bundled", "unbound". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#account_id WorkerVersion#account_id}

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.workerId"></a>

```java
public java.lang.String getWorkerId();
```

- *Type:* java.lang.String

Identifier for the Worker, which can be ID or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#worker_id WorkerVersion#worker_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.annotations"></a>

```java
public WorkerVersionAnnotations getAnnotations();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

Metadata about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#annotations WorkerVersion#annotations}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.assets"></a>

```java
public WorkerVersionAssets getAssets();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

Configuration for assets within a Worker.

[`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and
[`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files should be
included as modules named `_headers` and `_redirects` with content type `text/plain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#assets WorkerVersion#assets}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.bindings"></a>

```java
public java.lang.Object getBindings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>>

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#bindings WorkerVersion#bindings}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityDate"></a>

```java
public java.lang.String getCompatibilityDate();
```

- *Type:* java.lang.String

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#compatibility_date WorkerVersion#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityFlags"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlags();
```

- *Type:* java.util.List<java.lang.String>

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#compatibility_flags WorkerVersion#compatibility_flags}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.limits"></a>

```java
public WorkerVersionLimits getLimits();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

Resource limits enforced at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#limits WorkerVersion#limits}

---

##### `mainModule`<sup>Optional</sup> <a name="mainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.mainModule"></a>

```java
public java.lang.String getMainModule();
```

- *Type:* java.lang.String

The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#main_module WorkerVersion#main_module}

---

##### `migrations`<sup>Optional</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.migrations"></a>

```java
public WorkerVersionMigrations getMigrations();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#migrations WorkerVersion#migrations}

---

##### `modules`<sup>Optional</sup> <a name="modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.modules"></a>

```java
public java.lang.Object getModules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>>

Code, sourcemaps, and other content used at runtime.

This includes [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and
[`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files used to configure
[Static Assets](https://developers.cloudflare.com/workers/static-assets/). `_headers` and `_redirects` files should be
included as modules named `_headers` and `_redirects` with content type `text/plain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#modules WorkerVersion#modules}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.placement"></a>

```java
public WorkerVersionPlacement getPlacement();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

Placement settings for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#placement WorkerVersion#placement}

---

##### `usageModel`<sup>Optional</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.usageModel"></a>

```java
public java.lang.String getUsageModel();
```

- *Type:* java.lang.String

Usage model for the version. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#usage_model WorkerVersion#usage_model}

---

### WorkerVersionLimits <a name="WorkerVersionLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionLimits;

WorkerVersionLimits.builder()
    .cpuMs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.property.cpuMs">cpuMs</a></code> | <code>java.lang.Number</code> | CPU time limit in milliseconds. |

---

##### `cpuMs`<sup>Required</sup> <a name="cpuMs" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.property.cpuMs"></a>

```java
public java.lang.Number getCpuMs();
```

- *Type:* java.lang.Number

CPU time limit in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#cpu_ms WorkerVersion#cpu_ms}

---

### WorkerVersionMigrations <a name="WorkerVersionMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrations;

WorkerVersionMigrations.builder()
//  .deletedClasses(java.util.List<java.lang.String>)
//  .newClasses(java.util.List<java.lang.String>)
//  .newSqliteClasses(java.util.List<java.lang.String>)
//  .newTag(java.lang.String)
//  .oldTag(java.lang.String)
//  .renamedClasses(IResolvable)
//  .renamedClasses(java.util.List<WorkerVersionMigrationsRenamedClasses>)
//  .steps(IResolvable)
//  .steps(java.util.List<WorkerVersionMigrationsSteps>)
//  .transferredClasses(IResolvable)
//  .transferredClasses(java.util.List<WorkerVersionMigrationsTransferredClasses>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.deletedClasses">deletedClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newClasses">newClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newSqliteClasses">newSqliteClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newTag">newTag</a></code> | <code>java.lang.String</code> | Tag to set as the latest migration tag. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.oldTag">oldTag</a></code> | <code>java.lang.String</code> | Tag used to verify against the latest migration tag for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.renamedClasses">renamedClasses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>></code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.steps">steps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>></code> | Migrations to apply in order. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.transferredClasses">transferredClasses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>></code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `deletedClasses`<sup>Optional</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.deletedClasses"></a>

```java
public java.util.List<java.lang.String> getDeletedClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}

---

##### `newClasses`<sup>Optional</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newClasses"></a>

```java
public java.util.List<java.lang.String> getNewClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}

---

##### `newSqliteClasses`<sup>Optional</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newSqliteClasses"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}

---

##### `newTag`<sup>Optional</sup> <a name="newTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newTag"></a>

```java
public java.lang.String getNewTag();
```

- *Type:* java.lang.String

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#new_tag WorkerVersion#new_tag}

---

##### `oldTag`<sup>Optional</sup> <a name="oldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.oldTag"></a>

```java
public java.lang.String getOldTag();
```

- *Type:* java.lang.String

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#old_tag WorkerVersion#old_tag}

---

##### `renamedClasses`<sup>Optional</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.renamedClasses"></a>

```java
public java.lang.Object getRenamedClasses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>>

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.steps"></a>

```java
public java.lang.Object getSteps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>>

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#steps WorkerVersion#steps}

---

##### `transferredClasses`<sup>Optional</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.transferredClasses"></a>

```java
public java.lang.Object getTransferredClasses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>>

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}

---

### WorkerVersionMigrationsRenamedClasses <a name="WorkerVersionMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsRenamedClasses;

WorkerVersionMigrationsRenamedClasses.builder()
//  .from(java.lang.String)
//  .to(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsSteps <a name="WorkerVersionMigrationsSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsSteps;

WorkerVersionMigrationsSteps.builder()
//  .deletedClasses(java.util.List<java.lang.String>)
//  .newClasses(java.util.List<java.lang.String>)
//  .newSqliteClasses(java.util.List<java.lang.String>)
//  .renamedClasses(IResolvable)
//  .renamedClasses(java.util.List<WorkerVersionMigrationsStepsRenamedClasses>)
//  .transferredClasses(IResolvable)
//  .transferredClasses(java.util.List<WorkerVersionMigrationsStepsTransferredClasses>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.deletedClasses">deletedClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newClasses">newClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newSqliteClasses">newSqliteClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.renamedClasses">renamedClasses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>></code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.transferredClasses">transferredClasses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>></code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `deletedClasses`<sup>Optional</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.deletedClasses"></a>

```java
public java.util.List<java.lang.String> getDeletedClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}

---

##### `newClasses`<sup>Optional</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newClasses"></a>

```java
public java.util.List<java.lang.String> getNewClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}

---

##### `newSqliteClasses`<sup>Optional</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newSqliteClasses"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}

---

##### `renamedClasses`<sup>Optional</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.renamedClasses"></a>

```java
public java.lang.Object getRenamedClasses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>>

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}

---

##### `transferredClasses`<sup>Optional</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.transferredClasses"></a>

```java
public java.lang.Object getTransferredClasses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>>

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}

---

### WorkerVersionMigrationsStepsRenamedClasses <a name="WorkerVersionMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsStepsRenamedClasses;

WorkerVersionMigrationsStepsRenamedClasses.builder()
//  .from(java.lang.String)
//  .to(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsStepsTransferredClasses <a name="WorkerVersionMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsStepsTransferredClasses;

WorkerVersionMigrationsStepsTransferredClasses.builder()
//  .from(java.lang.String)
//  .fromScript(java.lang.String)
//  .to(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.fromScript">fromScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from_script WorkerVersion#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `fromScript`<sup>Optional</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.fromScript"></a>

```java
public java.lang.String getFromScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from_script WorkerVersion#from_script}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsTransferredClasses <a name="WorkerVersionMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsTransferredClasses;

WorkerVersionMigrationsTransferredClasses.builder()
//  .from(java.lang.String)
//  .fromScript(java.lang.String)
//  .to(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.fromScript">fromScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from_script WorkerVersion#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `fromScript`<sup>Optional</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.fromScript"></a>

```java
public java.lang.String getFromScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from_script WorkerVersion#from_script}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionModules <a name="WorkerVersionModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionModules;

WorkerVersionModules.builder()
    .contentFile(java.lang.String)
    .contentType(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentFile">contentFile</a></code> | <code>java.lang.String</code> | The file path of the module content. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentType">contentType</a></code> | <code>java.lang.String</code> | The content type of the module. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.name">name</a></code> | <code>java.lang.String</code> | The name of the module. |

---

##### `contentFile`<sup>Required</sup> <a name="contentFile" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentFile"></a>

```java
public java.lang.String getContentFile();
```

- *Type:* java.lang.String

The file path of the module content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#content_file WorkerVersion#content_file}

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

The content type of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#content_type WorkerVersion#content_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#name WorkerVersion#name}

---

### WorkerVersionPlacement <a name="WorkerVersionPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionPlacement;

WorkerVersionPlacement.builder()
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.property.mode">mode</a></code> | <code>java.lang.String</code> | Placement mode for the version. Available values: "smart". |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Placement mode for the version. Available values: "smart".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#mode WorkerVersion#mode}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerVersionAnnotationsOutputReference <a name="WorkerVersionAnnotationsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionAnnotationsOutputReference;

new WorkerVersionAnnotationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersMessage">resetWorkersMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersTag">resetWorkersTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkersMessage` <a name="resetWorkersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersMessage"></a>

```java
public void resetWorkersMessage()
```

##### `resetWorkersTag` <a name="resetWorkersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersTag"></a>

```java
public void resetWorkersTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTriggeredBy">workersTriggeredBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessageInput">workersMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTagInput">workersTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessage">workersMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTag">workersTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workersTriggeredBy`<sup>Required</sup> <a name="workersTriggeredBy" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTriggeredBy"></a>

```java
public java.lang.String getWorkersTriggeredBy();
```

- *Type:* java.lang.String

---

##### `workersMessageInput`<sup>Optional</sup> <a name="workersMessageInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessageInput"></a>

```java
public java.lang.String getWorkersMessageInput();
```

- *Type:* java.lang.String

---

##### `workersTagInput`<sup>Optional</sup> <a name="workersTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTagInput"></a>

```java
public java.lang.String getWorkersTagInput();
```

- *Type:* java.lang.String

---

##### `workersMessage`<sup>Required</sup> <a name="workersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessage"></a>

```java
public java.lang.String getWorkersMessage();
```

- *Type:* java.lang.String

---

##### `workersTag`<sup>Required</sup> <a name="workersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTag"></a>

```java
public java.lang.String getWorkersTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

---


### WorkerVersionAssetsConfigOutputReference <a name="WorkerVersionAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionAssetsConfigOutputReference;

new WorkerVersionAssetsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetHtmlHandling">resetHtmlHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetNotFoundHandling">resetNotFoundHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetRunWorkerFirst">resetRunWorkerFirst</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHtmlHandling` <a name="resetHtmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetHtmlHandling"></a>

```java
public void resetHtmlHandling()
```

##### `resetNotFoundHandling` <a name="resetNotFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetNotFoundHandling"></a>

```java
public void resetNotFoundHandling()
```

##### `resetRunWorkerFirst` <a name="resetRunWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetRunWorkerFirst"></a>

```java
public void resetRunWorkerFirst()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandlingInput">htmlHandlingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandlingInput">notFoundHandlingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirstInput">runWorkerFirstInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandling">htmlHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandling">notFoundHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirst">runWorkerFirst</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `htmlHandlingInput`<sup>Optional</sup> <a name="htmlHandlingInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandlingInput"></a>

```java
public java.lang.String getHtmlHandlingInput();
```

- *Type:* java.lang.String

---

##### `notFoundHandlingInput`<sup>Optional</sup> <a name="notFoundHandlingInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandlingInput"></a>

```java
public java.lang.String getNotFoundHandlingInput();
```

- *Type:* java.lang.String

---

##### `runWorkerFirstInput`<sup>Optional</sup> <a name="runWorkerFirstInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirstInput"></a>

```java
public java.util.List<java.lang.String> getRunWorkerFirstInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `htmlHandling`<sup>Required</sup> <a name="htmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandling"></a>

```java
public java.lang.String getHtmlHandling();
```

- *Type:* java.lang.String

---

##### `notFoundHandling`<sup>Required</sup> <a name="notFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandling"></a>

```java
public java.lang.String getNotFoundHandling();
```

- *Type:* java.lang.String

---

##### `runWorkerFirst`<sup>Required</sup> <a name="runWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirst"></a>

```java
public java.util.List<java.lang.String> getRunWorkerFirst();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

---


### WorkerVersionAssetsOutputReference <a name="WorkerVersionAssetsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionAssetsOutputReference;

new WorkerVersionAssetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetJwt">resetJwt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig"></a>

```java
public void putConfig(WorkerVersionAssetsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetJwt` <a name="resetJwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetJwt"></a>

```java
public void resetJwt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.assetManifestSha256">assetManifestSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference">WorkerVersionAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwtInput">jwtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwt">jwt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assetManifestSha256`<sup>Required</sup> <a name="assetManifestSha256" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.assetManifestSha256"></a>

```java
public java.lang.String getAssetManifestSha256();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.config"></a>

```java
public WorkerVersionAssetsConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference">WorkerVersionAssetsConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `jwtInput`<sup>Optional</sup> <a name="jwtInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwtInput"></a>

```java
public java.lang.String getJwtInput();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

---


### WorkerVersionBindingsList <a name="WorkerVersionBindingsList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionBindingsList;

new WorkerVersionBindingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get"></a>

```java
public WorkerVersionBindingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>>

---


### WorkerVersionBindingsOutboundOutputReference <a name="WorkerVersionBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionBindingsOutboundOutputReference;

new WorkerVersionBindingsOutboundOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker">putWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetWorker">resetWorker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWorker` <a name="putWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker"></a>

```java
public void putWorker(WorkerVersionBindingsOutboundWorker value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

---

##### `resetParams` <a name="resetParams" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetParams"></a>

```java
public void resetParams()
```

##### `resetWorker` <a name="resetWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetWorker"></a>

```java
public void resetWorker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference">WorkerVersionBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.paramsInput">paramsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.workerInput">workerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.params">params</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.worker"></a>

```java
public WorkerVersionBindingsOutboundWorkerOutputReference getWorker();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference">WorkerVersionBindingsOutboundWorkerOutputReference</a>

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.paramsInput"></a>

```java
public java.util.List<java.lang.String> getParamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workerInput`<sup>Optional</sup> <a name="workerInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.workerInput"></a>

```java
public java.lang.Object getWorkerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.params"></a>

```java
public java.util.List<java.lang.String> getParams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

---


### WorkerVersionBindingsOutboundWorkerOutputReference <a name="WorkerVersionBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionBindingsOutboundWorkerOutputReference;

new WorkerVersionBindingsOutboundWorkerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

---


### WorkerVersionBindingsOutputReference <a name="WorkerVersionBindingsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionBindingsOutputReference;

new WorkerVersionBindingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound">putOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedDestinationAddresses">resetAllowedDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedSenderAddresses">resetAllowedSenderAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetClassName">resetClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDataset">resetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJson">resetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJurisdiction">resetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyBase64">resetKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyJwk">resetKeyJwk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOldName">resetOldName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOutbound">resetOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPart">resetPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPipeline">resetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetQueueName">resetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetScriptName">resetScriptName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetStoreId">resetStoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetUsages">resetUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetWorkflowName">resetWorkflowName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutbound` <a name="putOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound"></a>

```java
public void putOutbound(WorkerVersionBindingsOutbound value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

---

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetAllowedDestinationAddresses` <a name="resetAllowedDestinationAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedDestinationAddresses"></a>

```java
public void resetAllowedDestinationAddresses()
```

##### `resetAllowedSenderAddresses` <a name="resetAllowedSenderAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedSenderAddresses"></a>

```java
public void resetAllowedSenderAddresses()
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetClassName` <a name="resetClassName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetClassName"></a>

```java
public void resetClassName()
```

##### `resetDataset` <a name="resetDataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDataset"></a>

```java
public void resetDataset()
```

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDestinationAddress"></a>

```java
public void resetDestinationAddress()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIndexName` <a name="resetIndexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetIndexName"></a>

```java
public void resetIndexName()
```

##### `resetJson` <a name="resetJson" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJson"></a>

```java
public void resetJson()
```

##### `resetJurisdiction` <a name="resetJurisdiction" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJurisdiction"></a>

```java
public void resetJurisdiction()
```

##### `resetKeyBase64` <a name="resetKeyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyBase64"></a>

```java
public void resetKeyBase64()
```

##### `resetKeyJwk` <a name="resetKeyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyJwk"></a>

```java
public void resetKeyJwk()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespaceId"></a>

```java
public void resetNamespaceId()
```

##### `resetOldName` <a name="resetOldName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOldName"></a>

```java
public void resetOldName()
```

##### `resetOutbound` <a name="resetOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOutbound"></a>

```java
public void resetOutbound()
```

##### `resetPart` <a name="resetPart" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPart"></a>

```java
public void resetPart()
```

##### `resetPipeline` <a name="resetPipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPipeline"></a>

```java
public void resetPipeline()
```

##### `resetQueueName` <a name="resetQueueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetQueueName"></a>

```java
public void resetQueueName()
```

##### `resetScriptName` <a name="resetScriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetScriptName"></a>

```java
public void resetScriptName()
```

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetSecretName"></a>

```java
public void resetSecretName()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetStoreId` <a name="resetStoreId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetStoreId"></a>

```java
public void resetStoreId()
```

##### `resetText` <a name="resetText" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetText"></a>

```java
public void resetText()
```

##### `resetUsages` <a name="resetUsages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetUsages"></a>

```java
public void resetUsages()
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetVersionId"></a>

```java
public void resetVersionId()
```

##### `resetWorkflowName` <a name="resetWorkflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetWorkflowName"></a>

```java
public void resetWorkflowName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference">WorkerVersionBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddressesInput">allowedDestinationAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddressesInput">allowedSenderAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.classNameInput">classNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jsonInput">jsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdictionInput">jurisdictionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64Input">keyBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwkInput">keyJwkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceIdInput">namespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldNameInput">oldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outboundInput">outboundInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.partInput">partInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipelineInput">pipelineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueNameInput">queueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptNameInput">scriptNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeIdInput">storeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usagesInput">usagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowNameInput">workflowNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddresses">allowedDestinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddresses">allowedSenderAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.className">className</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.json">json</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64">keyBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwk">keyJwk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldName">oldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.part">part</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipeline">pipeline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueName">queueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeId">storeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usages">usages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outbound"></a>

```java
public WorkerVersionBindingsOutboundOutputReference getOutbound();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference">WorkerVersionBindingsOutboundOutputReference</a>

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `allowedDestinationAddressesInput`<sup>Optional</sup> <a name="allowedDestinationAddressesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDestinationAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedSenderAddressesInput`<sup>Optional</sup> <a name="allowedSenderAddressesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedSenderAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `classNameInput`<sup>Optional</sup> <a name="classNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.classNameInput"></a>

```java
public java.lang.String getClassNameInput();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddressInput"></a>

```java
public java.lang.String getDestinationAddressInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexNameInput"></a>

```java
public java.lang.String getIndexNameInput();
```

- *Type:* java.lang.String

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jsonInput"></a>

```java
public java.lang.String getJsonInput();
```

- *Type:* java.lang.String

---

##### `jurisdictionInput`<sup>Optional</sup> <a name="jurisdictionInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdictionInput"></a>

```java
public java.lang.String getJurisdictionInput();
```

- *Type:* java.lang.String

---

##### `keyBase64Input`<sup>Optional</sup> <a name="keyBase64Input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64Input"></a>

```java
public java.lang.String getKeyBase64Input();
```

- *Type:* java.lang.String

---

##### `keyJwkInput`<sup>Optional</sup> <a name="keyJwkInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwkInput"></a>

```java
public java.lang.String getKeyJwkInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceIdInput"></a>

```java
public java.lang.String getNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `oldNameInput`<sup>Optional</sup> <a name="oldNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldNameInput"></a>

```java
public java.lang.String getOldNameInput();
```

- *Type:* java.lang.String

---

##### `outboundInput`<sup>Optional</sup> <a name="outboundInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outboundInput"></a>

```java
public java.lang.Object getOutboundInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

---

##### `partInput`<sup>Optional</sup> <a name="partInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.partInput"></a>

```java
public java.lang.String getPartInput();
```

- *Type:* java.lang.String

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipelineInput"></a>

```java
public java.lang.String getPipelineInput();
```

- *Type:* java.lang.String

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueNameInput"></a>

```java
public java.lang.String getQueueNameInput();
```

- *Type:* java.lang.String

---

##### `scriptNameInput`<sup>Optional</sup> <a name="scriptNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptNameInput"></a>

```java
public java.lang.String getScriptNameInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `storeIdInput`<sup>Optional</sup> <a name="storeIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeIdInput"></a>

```java
public java.lang.String getStoreIdInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usagesInput`<sup>Optional</sup> <a name="usagesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usagesInput"></a>

```java
public java.util.List<java.lang.String> getUsagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `workflowNameInput`<sup>Optional</sup> <a name="workflowNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowNameInput"></a>

```java
public java.lang.String getWorkflowNameInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `allowedDestinationAddresses`<sup>Required</sup> <a name="allowedDestinationAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedSenderAddresses`<sup>Required</sup> <a name="allowedSenderAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedSenderAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `className`<sup>Required</sup> <a name="className" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.className"></a>

```java
public java.lang.String getClassName();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdiction"></a>

```java
public java.lang.String getJurisdiction();
```

- *Type:* java.lang.String

---

##### `keyBase64`<sup>Required</sup> <a name="keyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64"></a>

```java
public java.lang.String getKeyBase64();
```

- *Type:* java.lang.String

---

##### `keyJwk`<sup>Required</sup> <a name="keyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwk"></a>

```java
public java.lang.String getKeyJwk();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `oldName`<sup>Required</sup> <a name="oldName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldName"></a>

```java
public java.lang.String getOldName();
```

- *Type:* java.lang.String

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.part"></a>

```java
public java.lang.String getPart();
```

- *Type:* java.lang.String

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipeline"></a>

```java
public java.lang.String getPipeline();
```

- *Type:* java.lang.String

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeId"></a>

```java
public java.lang.String getStoreId();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usages"></a>

```java
public java.util.List<java.lang.String> getUsages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>

---


### WorkerVersionLimitsOutputReference <a name="WorkerVersionLimitsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionLimitsOutputReference;

new WorkerVersionLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMsInput">cpuMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMs">cpuMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuMsInput`<sup>Optional</sup> <a name="cpuMsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMsInput"></a>

```java
public java.lang.Number getCpuMsInput();
```

- *Type:* java.lang.Number

---

##### `cpuMs`<sup>Required</sup> <a name="cpuMs" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMs"></a>

```java
public java.lang.Number getCpuMs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

---


### WorkerVersionMigrationsOutputReference <a name="WorkerVersionMigrationsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsOutputReference;

new WorkerVersionMigrationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses">putRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses">putTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetDeletedClasses">resetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewClasses">resetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewSqliteClasses">resetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewTag">resetNewTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetOldTag">resetOldTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetRenamedClasses">resetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetSteps">resetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetTransferredClasses">resetTransferredClasses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRenamedClasses` <a name="putRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses"></a>

```java
public void putRenamedClasses(IResolvable OR java.util.List<WorkerVersionMigrationsRenamedClasses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>>

---

##### `putSteps` <a name="putSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps"></a>

```java
public void putSteps(IResolvable OR java.util.List<WorkerVersionMigrationsSteps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>>

---

##### `putTransferredClasses` <a name="putTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses"></a>

```java
public void putTransferredClasses(IResolvable OR java.util.List<WorkerVersionMigrationsTransferredClasses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>>

---

##### `resetDeletedClasses` <a name="resetDeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetDeletedClasses"></a>

```java
public void resetDeletedClasses()
```

##### `resetNewClasses` <a name="resetNewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewClasses"></a>

```java
public void resetNewClasses()
```

##### `resetNewSqliteClasses` <a name="resetNewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewSqliteClasses"></a>

```java
public void resetNewSqliteClasses()
```

##### `resetNewTag` <a name="resetNewTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewTag"></a>

```java
public void resetNewTag()
```

##### `resetOldTag` <a name="resetOldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetOldTag"></a>

```java
public void resetOldTag()
```

##### `resetRenamedClasses` <a name="resetRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetRenamedClasses"></a>

```java
public void resetRenamedClasses()
```

##### `resetSteps` <a name="resetSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetSteps"></a>

```java
public void resetSteps()
```

##### `resetTransferredClasses` <a name="resetTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetTransferredClasses"></a>

```java
public void resetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList">WorkerVersionMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList">WorkerVersionMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList">WorkerVersionMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClassesInput">deletedClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClassesInput">newClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClassesInput">newSqliteClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTagInput">newTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTagInput">oldTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClassesInput">renamedClassesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.stepsInput">stepsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClassesInput">transferredClassesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClasses">newClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTag">newTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTag">oldTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClasses"></a>

```java
public WorkerVersionMigrationsRenamedClassesList getRenamedClasses();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList">WorkerVersionMigrationsRenamedClassesList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.steps"></a>

```java
public WorkerVersionMigrationsStepsList getSteps();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList">WorkerVersionMigrationsStepsList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClasses"></a>

```java
public WorkerVersionMigrationsTransferredClassesList getTransferredClasses();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList">WorkerVersionMigrationsTransferredClassesList</a>

---

##### `deletedClassesInput`<sup>Optional</sup> <a name="deletedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClassesInput"></a>

```java
public java.util.List<java.lang.String> getDeletedClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newClassesInput`<sup>Optional</sup> <a name="newClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClassesInput"></a>

```java
public java.util.List<java.lang.String> getNewClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newSqliteClassesInput`<sup>Optional</sup> <a name="newSqliteClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClassesInput"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newTagInput`<sup>Optional</sup> <a name="newTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTagInput"></a>

```java
public java.lang.String getNewTagInput();
```

- *Type:* java.lang.String

---

##### `oldTagInput`<sup>Optional</sup> <a name="oldTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTagInput"></a>

```java
public java.lang.String getOldTagInput();
```

- *Type:* java.lang.String

---

##### `renamedClassesInput`<sup>Optional</sup> <a name="renamedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClassesInput"></a>

```java
public java.lang.Object getRenamedClassesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>>

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.stepsInput"></a>

```java
public java.lang.Object getStepsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>>

---

##### `transferredClassesInput`<sup>Optional</sup> <a name="transferredClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClassesInput"></a>

```java
public java.lang.Object getTransferredClassesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>>

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClasses"></a>

```java
public java.util.List<java.lang.String> getDeletedClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClasses"></a>

```java
public java.util.List<java.lang.String> getNewClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClasses"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newTag`<sup>Required</sup> <a name="newTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTag"></a>

```java
public java.lang.String getNewTag();
```

- *Type:* java.lang.String

---

##### `oldTag`<sup>Required</sup> <a name="oldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTag"></a>

```java
public java.lang.String getOldTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

---


### WorkerVersionMigrationsRenamedClassesList <a name="WorkerVersionMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsRenamedClassesList;

new WorkerVersionMigrationsRenamedClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get"></a>

```java
public WorkerVersionMigrationsRenamedClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>>

---


### WorkerVersionMigrationsRenamedClassesOutputReference <a name="WorkerVersionMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsRenamedClassesOutputReference;

new WorkerVersionMigrationsRenamedClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.toInput">toInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.toInput"></a>

```java
public java.lang.String getToInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>

---


### WorkerVersionMigrationsStepsList <a name="WorkerVersionMigrationsStepsList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsStepsList;

new WorkerVersionMigrationsStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get"></a>

```java
public WorkerVersionMigrationsStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>>

---


### WorkerVersionMigrationsStepsOutputReference <a name="WorkerVersionMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsStepsOutputReference;

new WorkerVersionMigrationsStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses">putRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses">putTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetDeletedClasses">resetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewClasses">resetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewSqliteClasses">resetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetRenamedClasses">resetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetTransferredClasses">resetTransferredClasses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRenamedClasses` <a name="putRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses"></a>

```java
public void putRenamedClasses(IResolvable OR java.util.List<WorkerVersionMigrationsStepsRenamedClasses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>>

---

##### `putTransferredClasses` <a name="putTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses"></a>

```java
public void putTransferredClasses(IResolvable OR java.util.List<WorkerVersionMigrationsStepsTransferredClasses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>>

---

##### `resetDeletedClasses` <a name="resetDeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetDeletedClasses"></a>

```java
public void resetDeletedClasses()
```

##### `resetNewClasses` <a name="resetNewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewClasses"></a>

```java
public void resetNewClasses()
```

##### `resetNewSqliteClasses` <a name="resetNewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewSqliteClasses"></a>

```java
public void resetNewSqliteClasses()
```

##### `resetRenamedClasses` <a name="resetRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetRenamedClasses"></a>

```java
public void resetRenamedClasses()
```

##### `resetTransferredClasses` <a name="resetTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetTransferredClasses"></a>

```java
public void resetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList">WorkerVersionMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList">WorkerVersionMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClassesInput">deletedClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClassesInput">newClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClassesInput">newSqliteClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClassesInput">renamedClassesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClassesInput">transferredClassesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClasses">newClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClasses"></a>

```java
public WorkerVersionMigrationsStepsRenamedClassesList getRenamedClasses();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList">WorkerVersionMigrationsStepsRenamedClassesList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClasses"></a>

```java
public WorkerVersionMigrationsStepsTransferredClassesList getTransferredClasses();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList">WorkerVersionMigrationsStepsTransferredClassesList</a>

---

##### `deletedClassesInput`<sup>Optional</sup> <a name="deletedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClassesInput"></a>

```java
public java.util.List<java.lang.String> getDeletedClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newClassesInput`<sup>Optional</sup> <a name="newClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClassesInput"></a>

```java
public java.util.List<java.lang.String> getNewClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newSqliteClassesInput`<sup>Optional</sup> <a name="newSqliteClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClassesInput"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renamedClassesInput`<sup>Optional</sup> <a name="renamedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClassesInput"></a>

```java
public java.lang.Object getRenamedClassesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>>

---

##### `transferredClassesInput`<sup>Optional</sup> <a name="transferredClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClassesInput"></a>

```java
public java.lang.Object getTransferredClassesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>>

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClasses"></a>

```java
public java.util.List<java.lang.String> getDeletedClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClasses"></a>

```java
public java.util.List<java.lang.String> getNewClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>

---


### WorkerVersionMigrationsStepsRenamedClassesList <a name="WorkerVersionMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsStepsRenamedClassesList;

new WorkerVersionMigrationsStepsRenamedClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get"></a>

```java
public WorkerVersionMigrationsStepsRenamedClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>>

---


### WorkerVersionMigrationsStepsRenamedClassesOutputReference <a name="WorkerVersionMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsStepsRenamedClassesOutputReference;

new WorkerVersionMigrationsStepsRenamedClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.toInput">toInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.toInput"></a>

```java
public java.lang.String getToInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>

---


### WorkerVersionMigrationsStepsTransferredClassesList <a name="WorkerVersionMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsStepsTransferredClassesList;

new WorkerVersionMigrationsStepsTransferredClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get"></a>

```java
public WorkerVersionMigrationsStepsTransferredClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>>

---


### WorkerVersionMigrationsStepsTransferredClassesOutputReference <a name="WorkerVersionMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsStepsTransferredClassesOutputReference;

new WorkerVersionMigrationsStepsTransferredClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFromScript">resetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetFromScript` <a name="resetFromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFromScript"></a>

```java
public void resetFromScript()
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput">fromScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.toInput">toInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `fromScriptInput`<sup>Optional</sup> <a name="fromScriptInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput"></a>

```java
public java.lang.String getFromScriptInput();
```

- *Type:* java.lang.String

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.toInput"></a>

```java
public java.lang.String getToInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```java
public java.lang.String getFromScript();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>

---


### WorkerVersionMigrationsTransferredClassesList <a name="WorkerVersionMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsTransferredClassesList;

new WorkerVersionMigrationsTransferredClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get"></a>

```java
public WorkerVersionMigrationsTransferredClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>>

---


### WorkerVersionMigrationsTransferredClassesOutputReference <a name="WorkerVersionMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionMigrationsTransferredClassesOutputReference;

new WorkerVersionMigrationsTransferredClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFromScript">resetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetFromScript` <a name="resetFromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFromScript"></a>

```java
public void resetFromScript()
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScriptInput">fromScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.toInput">toInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `fromScriptInput`<sup>Optional</sup> <a name="fromScriptInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScriptInput"></a>

```java
public java.lang.String getFromScriptInput();
```

- *Type:* java.lang.String

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.toInput"></a>

```java
public java.lang.String getToInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```java
public java.lang.String getFromScript();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>

---


### WorkerVersionModulesList <a name="WorkerVersionModulesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionModulesList;

new WorkerVersionModulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get"></a>

```java
public WorkerVersionModulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>>

---


### WorkerVersionModulesOutputReference <a name="WorkerVersionModulesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionModulesOutputReference;

new WorkerVersionModulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentSha256">contentSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFileInput">contentFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFile">contentFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentSha256`<sup>Required</sup> <a name="contentSha256" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentSha256"></a>

```java
public java.lang.String getContentSha256();
```

- *Type:* java.lang.String

---

##### `contentFileInput`<sup>Optional</sup> <a name="contentFileInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFileInput"></a>

```java
public java.lang.String getContentFileInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `contentFile`<sup>Required</sup> <a name="contentFile" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFile"></a>

```java
public java.lang.String getContentFile();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>

---


### WorkerVersionPlacementOutputReference <a name="WorkerVersionPlacementOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.worker_version.WorkerVersionPlacementOutputReference;

new WorkerVersionPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

---



