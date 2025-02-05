# `pagesProject` Submodule <a name="`pagesProject` Submodule" id="@cdktf/provider-cloudflare.pagesProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PagesProject <a name="PagesProject" id="@cdktf/provider-cloudflare.pagesProject.PagesProject"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project cloudflare_pages_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProject;

PagesProject.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .productionBranch(java.lang.String)
//  .buildConfig(PagesProjectBuildConfig)
//  .deploymentConfigs(PagesProjectDeploymentConfigs)
//  .id(java.lang.String)
//  .source(PagesProjectSource)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.productionBranch">productionBranch</a></code> | <code>java.lang.String</code> | The name of the branch that is used for the production environment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.buildConfig">buildConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.deploymentConfigs">deploymentConfigs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | deployment_configs block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#id PagesProject#id}. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | source block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#account_id PagesProject#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#name PagesProject#name}

---

##### `productionBranch`<sup>Required</sup> <a name="productionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.productionBranch"></a>

- *Type:* java.lang.String

The name of the branch that is used for the production environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#production_branch PagesProject#production_branch}

---

##### `buildConfig`<sup>Optional</sup> <a name="buildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.buildConfig"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#build_config PagesProject#build_config}

---

##### `deploymentConfigs`<sup>Optional</sup> <a name="deploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.deploymentConfigs"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

deployment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#deployment_configs PagesProject#deployment_configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#id PagesProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#source PagesProject#source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig">putBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs">putDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetBuildConfig">resetBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetDeploymentConfigs">resetDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildConfig` <a name="putBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig"></a>

```java
public void putBuildConfig(PagesProjectBuildConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---

##### `putDeploymentConfigs` <a name="putDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs"></a>

```java
public void putDeploymentConfigs(PagesProjectDeploymentConfigs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource"></a>

```java
public void putSource(PagesProjectSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---

##### `resetBuildConfig` <a name="resetBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetBuildConfig"></a>

```java
public void resetBuildConfig()
```

##### `resetDeploymentConfigs` <a name="resetDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetDeploymentConfigs"></a>

```java
public void resetDeploymentConfigs()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetId"></a>

```java
public void resetId()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetSource"></a>

```java
public void resetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PagesProject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProject;

PagesProject.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProject;

PagesProject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProject;

PagesProject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProject;

PagesProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PagesProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PagesProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PagesProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PagesProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PagesProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference">PagesProjectBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigs">deploymentConfigs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference">PagesProjectDeploymentConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference">PagesProjectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.subdomain">subdomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfigInput">buildConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigsInput">deploymentConfigsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranchInput">productionBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranch">productionBranch</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfig"></a>

```java
public PagesProjectBuildConfigOutputReference getBuildConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference">PagesProjectBuildConfigOutputReference</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `deploymentConfigs`<sup>Required</sup> <a name="deploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigs"></a>

```java
public PagesProjectDeploymentConfigsOutputReference getDeploymentConfigs();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference">PagesProjectDeploymentConfigsOutputReference</a>

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.source"></a>

```java
public PagesProjectSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference">PagesProjectSourceOutputReference</a>

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.subdomain"></a>

```java
public java.lang.String getSubdomain();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `buildConfigInput`<sup>Optional</sup> <a name="buildConfigInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfigInput"></a>

```java
public PagesProjectBuildConfig getBuildConfigInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---

##### `deploymentConfigsInput`<sup>Optional</sup> <a name="deploymentConfigsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigsInput"></a>

```java
public PagesProjectDeploymentConfigs getDeploymentConfigsInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productionBranchInput`<sup>Optional</sup> <a name="productionBranchInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranchInput"></a>

```java
public java.lang.String getProductionBranchInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.sourceInput"></a>

```java
public PagesProjectSource getSourceInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `productionBranch`<sup>Required</sup> <a name="productionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranch"></a>

```java
public java.lang.String getProductionBranch();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PagesProjectBuildConfig <a name="PagesProjectBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectBuildConfig;

PagesProjectBuildConfig.builder()
//  .buildCaching(java.lang.Boolean)
//  .buildCaching(IResolvable)
//  .buildCommand(java.lang.String)
//  .destinationDir(java.lang.String)
//  .rootDir(java.lang.String)
//  .webAnalyticsTag(java.lang.String)
//  .webAnalyticsToken(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCaching">buildCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable build caching for the project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCommand">buildCommand</a></code> | <code>java.lang.String</code> | Command used to build project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.destinationDir">destinationDir</a></code> | <code>java.lang.String</code> | Output directory of the build. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.rootDir">rootDir</a></code> | <code>java.lang.String</code> | Your project's root directory, where Cloudflare runs the build command. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsTag">webAnalyticsTag</a></code> | <code>java.lang.String</code> | The classifying tag for analytics. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsToken">webAnalyticsToken</a></code> | <code>java.lang.String</code> | The auth token for analytics. |

---

##### `buildCaching`<sup>Optional</sup> <a name="buildCaching" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCaching"></a>

```java
public java.lang.Object getBuildCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable build caching for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#build_caching PagesProject#build_caching}

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCommand"></a>

```java
public java.lang.String getBuildCommand();
```

- *Type:* java.lang.String

Command used to build project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#build_command PagesProject#build_command}

---

##### `destinationDir`<sup>Optional</sup> <a name="destinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.destinationDir"></a>

```java
public java.lang.String getDestinationDir();
```

- *Type:* java.lang.String

Output directory of the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#destination_dir PagesProject#destination_dir}

---

##### `rootDir`<sup>Optional</sup> <a name="rootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.rootDir"></a>

```java
public java.lang.String getRootDir();
```

- *Type:* java.lang.String

Your project's root directory, where Cloudflare runs the build command.

If your site is not in a subdirectory, leave this path value empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#root_dir PagesProject#root_dir}

---

##### `webAnalyticsTag`<sup>Optional</sup> <a name="webAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsTag"></a>

```java
public java.lang.String getWebAnalyticsTag();
```

- *Type:* java.lang.String

The classifying tag for analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#web_analytics_tag PagesProject#web_analytics_tag}

---

##### `webAnalyticsToken`<sup>Optional</sup> <a name="webAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsToken"></a>

```java
public java.lang.String getWebAnalyticsToken();
```

- *Type:* java.lang.String

The auth token for analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#web_analytics_token PagesProject#web_analytics_token}

---

### PagesProjectConfig <a name="PagesProjectConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectConfig;

PagesProjectConfig.builder()
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
    .name(java.lang.String)
    .productionBranch(java.lang.String)
//  .buildConfig(PagesProjectBuildConfig)
//  .deploymentConfigs(PagesProjectDeploymentConfigs)
//  .id(java.lang.String)
//  .source(PagesProjectSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.productionBranch">productionBranch</a></code> | <code>java.lang.String</code> | The name of the branch that is used for the production environment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.deploymentConfigs">deploymentConfigs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | deployment_configs block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#id PagesProject#id}. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#account_id PagesProject#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#name PagesProject#name}

---

##### `productionBranch`<sup>Required</sup> <a name="productionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.productionBranch"></a>

```java
public java.lang.String getProductionBranch();
```

- *Type:* java.lang.String

The name of the branch that is used for the production environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#production_branch PagesProject#production_branch}

---

##### `buildConfig`<sup>Optional</sup> <a name="buildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.buildConfig"></a>

```java
public PagesProjectBuildConfig getBuildConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#build_config PagesProject#build_config}

---

##### `deploymentConfigs`<sup>Optional</sup> <a name="deploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.deploymentConfigs"></a>

```java
public PagesProjectDeploymentConfigs getDeploymentConfigs();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

deployment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#deployment_configs PagesProject#deployment_configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#id PagesProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.source"></a>

```java
public PagesProjectSource getSource();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#source PagesProject#source}

---

### PagesProjectDeploymentConfigs <a name="PagesProjectDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigs;

PagesProjectDeploymentConfigs.builder()
//  .preview(PagesProjectDeploymentConfigsPreview)
//  .production(PagesProjectDeploymentConfigsProduction)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.preview">preview</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | preview block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.production">production</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | production block. |

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.preview"></a>

```java
public PagesProjectDeploymentConfigsPreview getPreview();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

preview block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#preview PagesProject#preview}

---

##### `production`<sup>Optional</sup> <a name="production" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.production"></a>

```java
public PagesProjectDeploymentConfigsProduction getProduction();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

production block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#production PagesProject#production}

---

### PagesProjectDeploymentConfigsPreview <a name="PagesProjectDeploymentConfigsPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsPreview;

PagesProjectDeploymentConfigsPreview.builder()
//  .alwaysUseLatestCompatibilityDate(java.lang.Boolean)
//  .alwaysUseLatestCompatibilityDate(IResolvable)
//  .compatibilityDate(java.lang.String)
//  .compatibilityFlags(java.util.List<java.lang.String>)
//  .d1Databases(java.util.Map<java.lang.String, java.lang.String>)
//  .durableObjectNamespaces(java.util.Map<java.lang.String, java.lang.String>)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .failOpen(java.lang.Boolean)
//  .failOpen(IResolvable)
//  .kvNamespaces(java.util.Map<java.lang.String, java.lang.String>)
//  .placement(PagesProjectDeploymentConfigsPreviewPlacement)
//  .r2Buckets(java.util.Map<java.lang.String, java.lang.String>)
//  .secrets(java.util.Map<java.lang.String, java.lang.String>)
//  .serviceBinding(IResolvable)
//  .serviceBinding(java.util.List<PagesProjectDeploymentConfigsPreviewServiceBinding>)
//  .usageModel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.alwaysUseLatestCompatibilityDate">alwaysUseLatestCompatibilityDate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use latest compatibility date for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | Compatibility date used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | Compatibility flags used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.d1Databases">d1Databases</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | D1 Databases used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.durableObjectNamespaces">durableObjectNamespaces</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Durable Object namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Fail open used for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.kvNamespaces">kvNamespaces</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | KV namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.r2Buckets">r2Buckets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | R2 Buckets used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Encrypted environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.serviceBinding">serviceBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>></code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.usageModel">usageModel</a></code> | <code>java.lang.String</code> | Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`. |

---

##### `alwaysUseLatestCompatibilityDate`<sup>Optional</sup> <a name="alwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.alwaysUseLatestCompatibilityDate"></a>

```java
public java.lang.Object getAlwaysUseLatestCompatibilityDate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityDate"></a>

```java
public java.lang.String getCompatibilityDate();
```

- *Type:* java.lang.String

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityFlags"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlags();
```

- *Type:* java.util.List<java.lang.String>

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

##### `d1Databases`<sup>Optional</sup> <a name="d1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.d1Databases"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getD1Databases();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

D1 Databases used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}

---

##### `durableObjectNamespaces`<sup>Optional</sup> <a name="durableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.durableObjectNamespaces"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDurableObjectNamespaces();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Durable Object namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#environment_variables PagesProject#environment_variables}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.failOpen"></a>

```java
public java.lang.Object getFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#fail_open PagesProject#fail_open}

---

##### `kvNamespaces`<sup>Optional</sup> <a name="kvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.kvNamespaces"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKvNamespaces();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

KV namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.placement"></a>

```java
public PagesProjectDeploymentConfigsPreviewPlacement getPlacement();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#placement PagesProject#placement}

---

##### `r2Buckets`<sup>Optional</sup> <a name="r2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.r2Buckets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getR2Buckets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

R2 Buckets used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.secrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Encrypted environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#secrets PagesProject#secrets}

---

##### `serviceBinding`<sup>Optional</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.serviceBinding"></a>

```java
public java.lang.Object getServiceBinding();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>>

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#service_binding PagesProject#service_binding}

---

##### `usageModel`<sup>Optional</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.usageModel"></a>

```java
public java.lang.String getUsageModel();
```

- *Type:* java.lang.String

Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#usage_model PagesProject#usage_model}

---

### PagesProjectDeploymentConfigsPreviewPlacement <a name="PagesProjectDeploymentConfigsPreviewPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsPreviewPlacement;

PagesProjectDeploymentConfigsPreviewPlacement.builder()
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.property.mode">mode</a></code> | <code>java.lang.String</code> | Placement Mode for the Pages Function. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Placement Mode for the Pages Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#mode PagesProject#mode}

---

### PagesProjectDeploymentConfigsPreviewServiceBinding <a name="PagesProjectDeploymentConfigsPreviewServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsPreviewServiceBinding;

PagesProjectDeploymentConfigsPreviewServiceBinding.builder()
    .name(java.lang.String)
    .service(java.lang.String)
//  .environment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.name">name</a></code> | <code>java.lang.String</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.service">service</a></code> | <code>java.lang.String</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.environment">environment</a></code> | <code>java.lang.String</code> | The name of the Worker environment to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#name PagesProject#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#service PagesProject#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#environment PagesProject#environment}

---

### PagesProjectDeploymentConfigsProduction <a name="PagesProjectDeploymentConfigsProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsProduction;

PagesProjectDeploymentConfigsProduction.builder()
//  .alwaysUseLatestCompatibilityDate(java.lang.Boolean)
//  .alwaysUseLatestCompatibilityDate(IResolvable)
//  .compatibilityDate(java.lang.String)
//  .compatibilityFlags(java.util.List<java.lang.String>)
//  .d1Databases(java.util.Map<java.lang.String, java.lang.String>)
//  .durableObjectNamespaces(java.util.Map<java.lang.String, java.lang.String>)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .failOpen(java.lang.Boolean)
//  .failOpen(IResolvable)
//  .kvNamespaces(java.util.Map<java.lang.String, java.lang.String>)
//  .placement(PagesProjectDeploymentConfigsProductionPlacement)
//  .r2Buckets(java.util.Map<java.lang.String, java.lang.String>)
//  .secrets(java.util.Map<java.lang.String, java.lang.String>)
//  .serviceBinding(IResolvable)
//  .serviceBinding(java.util.List<PagesProjectDeploymentConfigsProductionServiceBinding>)
//  .usageModel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.alwaysUseLatestCompatibilityDate">alwaysUseLatestCompatibilityDate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use latest compatibility date for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | Compatibility date used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | Compatibility flags used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.d1Databases">d1Databases</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | D1 Databases used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.durableObjectNamespaces">durableObjectNamespaces</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Durable Object namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Fail open used for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.kvNamespaces">kvNamespaces</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | KV namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.r2Buckets">r2Buckets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | R2 Buckets used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Encrypted environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.serviceBinding">serviceBinding</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>></code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.usageModel">usageModel</a></code> | <code>java.lang.String</code> | Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`. |

---

##### `alwaysUseLatestCompatibilityDate`<sup>Optional</sup> <a name="alwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.alwaysUseLatestCompatibilityDate"></a>

```java
public java.lang.Object getAlwaysUseLatestCompatibilityDate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityDate"></a>

```java
public java.lang.String getCompatibilityDate();
```

- *Type:* java.lang.String

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityFlags"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlags();
```

- *Type:* java.util.List<java.lang.String>

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

##### `d1Databases`<sup>Optional</sup> <a name="d1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.d1Databases"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getD1Databases();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

D1 Databases used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}

---

##### `durableObjectNamespaces`<sup>Optional</sup> <a name="durableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.durableObjectNamespaces"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDurableObjectNamespaces();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Durable Object namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#environment_variables PagesProject#environment_variables}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.failOpen"></a>

```java
public java.lang.Object getFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#fail_open PagesProject#fail_open}

---

##### `kvNamespaces`<sup>Optional</sup> <a name="kvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.kvNamespaces"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKvNamespaces();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

KV namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.placement"></a>

```java
public PagesProjectDeploymentConfigsProductionPlacement getPlacement();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#placement PagesProject#placement}

---

##### `r2Buckets`<sup>Optional</sup> <a name="r2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.r2Buckets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getR2Buckets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

R2 Buckets used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.secrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Encrypted environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#secrets PagesProject#secrets}

---

##### `serviceBinding`<sup>Optional</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.serviceBinding"></a>

```java
public java.lang.Object getServiceBinding();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>>

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#service_binding PagesProject#service_binding}

---

##### `usageModel`<sup>Optional</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.usageModel"></a>

```java
public java.lang.String getUsageModel();
```

- *Type:* java.lang.String

Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#usage_model PagesProject#usage_model}

---

### PagesProjectDeploymentConfigsProductionPlacement <a name="PagesProjectDeploymentConfigsProductionPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsProductionPlacement;

PagesProjectDeploymentConfigsProductionPlacement.builder()
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.property.mode">mode</a></code> | <code>java.lang.String</code> | Placement Mode for the Pages Function. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Placement Mode for the Pages Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#mode PagesProject#mode}

---

### PagesProjectDeploymentConfigsProductionServiceBinding <a name="PagesProjectDeploymentConfigsProductionServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsProductionServiceBinding;

PagesProjectDeploymentConfigsProductionServiceBinding.builder()
    .name(java.lang.String)
    .service(java.lang.String)
//  .environment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.name">name</a></code> | <code>java.lang.String</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.service">service</a></code> | <code>java.lang.String</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.environment">environment</a></code> | <code>java.lang.String</code> | The name of the Worker environment to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#name PagesProject#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#service PagesProject#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#environment PagesProject#environment}

---

### PagesProjectSource <a name="PagesProjectSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectSource;

PagesProjectSource.builder()
//  .config(PagesProjectSourceConfig)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.type">type</a></code> | <code>java.lang.String</code> | Project host type. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.config"></a>

```java
public PagesProjectSourceConfig getConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#config PagesProject#config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Project host type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#type PagesProject#type}

---

### PagesProjectSourceConfig <a name="PagesProjectSourceConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectSourceConfig;

PagesProjectSourceConfig.builder()
    .productionBranch(java.lang.String)
//  .deploymentsEnabled(java.lang.Boolean)
//  .deploymentsEnabled(IResolvable)
//  .owner(java.lang.String)
//  .prCommentsEnabled(java.lang.Boolean)
//  .prCommentsEnabled(IResolvable)
//  .previewBranchExcludes(java.util.List<java.lang.String>)
//  .previewBranchIncludes(java.util.List<java.lang.String>)
//  .previewDeploymentSetting(java.lang.String)
//  .productionDeploymentEnabled(java.lang.Boolean)
//  .productionDeploymentEnabled(IResolvable)
//  .repoName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionBranch">productionBranch</a></code> | <code>java.lang.String</code> | Project production branch name. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.deploymentsEnabled">deploymentsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Toggle deployments on this repo. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Project owner username. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.prCommentsEnabled">prCommentsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Pages to comment on Pull Requests. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchExcludes">previewBranchExcludes</a></code> | <code>java.util.List<java.lang.String></code> | Branches will be excluded from automatic deployment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchIncludes">previewBranchIncludes</a></code> | <code>java.util.List<java.lang.String></code> | Branches will be included for automatic deployment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewDeploymentSetting">previewDeploymentSetting</a></code> | <code>java.lang.String</code> | Preview Deployment Setting. Available values: `custom`, `all`, `none`. Defaults to `all`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionDeploymentEnabled">productionDeploymentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable production deployments. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.repoName">repoName</a></code> | <code>java.lang.String</code> | Project repository name. **Modifying this attribute will force creation of a new resource.**. |

---

##### `productionBranch`<sup>Required</sup> <a name="productionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionBranch"></a>

```java
public java.lang.String getProductionBranch();
```

- *Type:* java.lang.String

Project production branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#production_branch PagesProject#production_branch}

---

##### `deploymentsEnabled`<sup>Optional</sup> <a name="deploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.deploymentsEnabled"></a>

```java
public java.lang.Object getDeploymentsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Toggle deployments on this repo. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#deployments_enabled PagesProject#deployments_enabled}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Project owner username. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#owner PagesProject#owner}

---

##### `prCommentsEnabled`<sup>Optional</sup> <a name="prCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.prCommentsEnabled"></a>

```java
public java.lang.Object getPrCommentsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Pages to comment on Pull Requests. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#pr_comments_enabled PagesProject#pr_comments_enabled}

---

##### `previewBranchExcludes`<sup>Optional</sup> <a name="previewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchExcludes"></a>

```java
public java.util.List<java.lang.String> getPreviewBranchExcludes();
```

- *Type:* java.util.List<java.lang.String>

Branches will be excluded from automatic deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#preview_branch_excludes PagesProject#preview_branch_excludes}

---

##### `previewBranchIncludes`<sup>Optional</sup> <a name="previewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchIncludes"></a>

```java
public java.util.List<java.lang.String> getPreviewBranchIncludes();
```

- *Type:* java.util.List<java.lang.String>

Branches will be included for automatic deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#preview_branch_includes PagesProject#preview_branch_includes}

---

##### `previewDeploymentSetting`<sup>Optional</sup> <a name="previewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewDeploymentSetting"></a>

```java
public java.lang.String getPreviewDeploymentSetting();
```

- *Type:* java.lang.String

Preview Deployment Setting. Available values: `custom`, `all`, `none`. Defaults to `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#preview_deployment_setting PagesProject#preview_deployment_setting}

---

##### `productionDeploymentEnabled`<sup>Optional</sup> <a name="productionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionDeploymentEnabled"></a>

```java
public java.lang.Object getProductionDeploymentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable production deployments. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#production_deployment_enabled PagesProject#production_deployment_enabled}

---

##### `repoName`<sup>Optional</sup> <a name="repoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

Project repository name. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/pages_project#repo_name PagesProject#repo_name}

---

## Classes <a name="Classes" id="Classes"></a>

### PagesProjectBuildConfigOutputReference <a name="PagesProjectBuildConfigOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectBuildConfigOutputReference;

new PagesProjectBuildConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCaching">resetBuildCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCommand">resetBuildCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetDestinationDir">resetDestinationDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetRootDir">resetRootDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsTag">resetWebAnalyticsTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsToken">resetWebAnalyticsToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuildCaching` <a name="resetBuildCaching" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCaching"></a>

```java
public void resetBuildCaching()
```

##### `resetBuildCommand` <a name="resetBuildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCommand"></a>

```java
public void resetBuildCommand()
```

##### `resetDestinationDir` <a name="resetDestinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetDestinationDir"></a>

```java
public void resetDestinationDir()
```

##### `resetRootDir` <a name="resetRootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetRootDir"></a>

```java
public void resetRootDir()
```

##### `resetWebAnalyticsTag` <a name="resetWebAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsTag"></a>

```java
public void resetWebAnalyticsTag()
```

##### `resetWebAnalyticsToken` <a name="resetWebAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsToken"></a>

```java
public void resetWebAnalyticsToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCachingInput">buildCachingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommandInput">buildCommandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDirInput">destinationDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDirInput">rootDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTagInput">webAnalyticsTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTokenInput">webAnalyticsTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCaching">buildCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommand">buildCommand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDir">destinationDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDir">rootDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTag">webAnalyticsTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsToken">webAnalyticsToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildCachingInput`<sup>Optional</sup> <a name="buildCachingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCachingInput"></a>

```java
public java.lang.Object getBuildCachingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `buildCommandInput`<sup>Optional</sup> <a name="buildCommandInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommandInput"></a>

```java
public java.lang.String getBuildCommandInput();
```

- *Type:* java.lang.String

---

##### `destinationDirInput`<sup>Optional</sup> <a name="destinationDirInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDirInput"></a>

```java
public java.lang.String getDestinationDirInput();
```

- *Type:* java.lang.String

---

##### `rootDirInput`<sup>Optional</sup> <a name="rootDirInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDirInput"></a>

```java
public java.lang.String getRootDirInput();
```

- *Type:* java.lang.String

---

##### `webAnalyticsTagInput`<sup>Optional</sup> <a name="webAnalyticsTagInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTagInput"></a>

```java
public java.lang.String getWebAnalyticsTagInput();
```

- *Type:* java.lang.String

---

##### `webAnalyticsTokenInput`<sup>Optional</sup> <a name="webAnalyticsTokenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTokenInput"></a>

```java
public java.lang.String getWebAnalyticsTokenInput();
```

- *Type:* java.lang.String

---

##### `buildCaching`<sup>Required</sup> <a name="buildCaching" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCaching"></a>

```java
public java.lang.Object getBuildCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `buildCommand`<sup>Required</sup> <a name="buildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommand"></a>

```java
public java.lang.String getBuildCommand();
```

- *Type:* java.lang.String

---

##### `destinationDir`<sup>Required</sup> <a name="destinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDir"></a>

```java
public java.lang.String getDestinationDir();
```

- *Type:* java.lang.String

---

##### `rootDir`<sup>Required</sup> <a name="rootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDir"></a>

```java
public java.lang.String getRootDir();
```

- *Type:* java.lang.String

---

##### `webAnalyticsTag`<sup>Required</sup> <a name="webAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTag"></a>

```java
public java.lang.String getWebAnalyticsTag();
```

- *Type:* java.lang.String

---

##### `webAnalyticsToken`<sup>Required</sup> <a name="webAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsToken"></a>

```java
public java.lang.String getWebAnalyticsToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.internalValue"></a>

```java
public PagesProjectBuildConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---


### PagesProjectDeploymentConfigsOutputReference <a name="PagesProjectDeploymentConfigsOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsOutputReference;

new PagesProjectDeploymentConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview">putPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction">putProduction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetProduction">resetProduction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreview` <a name="putPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview"></a>

```java
public void putPreview(PagesProjectDeploymentConfigsPreview value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---

##### `putProduction` <a name="putProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction"></a>

```java
public void putProduction(PagesProjectDeploymentConfigsProduction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---

##### `resetPreview` <a name="resetPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetPreview"></a>

```java
public void resetPreview()
```

##### `resetProduction` <a name="resetProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetProduction"></a>

```java
public void resetProduction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.preview">preview</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference">PagesProjectDeploymentConfigsPreviewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.production">production</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference">PagesProjectDeploymentConfigsProductionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.previewInput">previewInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.productionInput">productionInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.preview"></a>

```java
public PagesProjectDeploymentConfigsPreviewOutputReference getPreview();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference">PagesProjectDeploymentConfigsPreviewOutputReference</a>

---

##### `production`<sup>Required</sup> <a name="production" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.production"></a>

```java
public PagesProjectDeploymentConfigsProductionOutputReference getProduction();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference">PagesProjectDeploymentConfigsProductionOutputReference</a>

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.previewInput"></a>

```java
public PagesProjectDeploymentConfigsPreview getPreviewInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---

##### `productionInput`<sup>Optional</sup> <a name="productionInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.productionInput"></a>

```java
public PagesProjectDeploymentConfigsProduction getProductionInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.internalValue"></a>

```java
public PagesProjectDeploymentConfigs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---


### PagesProjectDeploymentConfigsPreviewOutputReference <a name="PagesProjectDeploymentConfigsPreviewOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsPreviewOutputReference;

new PagesProjectDeploymentConfigsPreviewOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding">putServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetAlwaysUseLatestCompatibilityDate">resetAlwaysUseLatestCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityDate">resetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityFlags">resetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetD1Databases">resetD1Databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetDurableObjectNamespaces">resetDurableObjectNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetKvNamespaces">resetKvNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetR2Buckets">resetR2Buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetServiceBinding">resetServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetUsageModel">resetUsageModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement"></a>

```java
public void putPlacement(PagesProjectDeploymentConfigsPreviewPlacement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

---

##### `putServiceBinding` <a name="putServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding"></a>

```java
public void putServiceBinding(IResolvable OR java.util.List<PagesProjectDeploymentConfigsPreviewServiceBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>>

---

##### `resetAlwaysUseLatestCompatibilityDate` <a name="resetAlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetAlwaysUseLatestCompatibilityDate"></a>

```java
public void resetAlwaysUseLatestCompatibilityDate()
```

##### `resetCompatibilityDate` <a name="resetCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityDate"></a>

```java
public void resetCompatibilityDate()
```

##### `resetCompatibilityFlags` <a name="resetCompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityFlags"></a>

```java
public void resetCompatibilityFlags()
```

##### `resetD1Databases` <a name="resetD1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetD1Databases"></a>

```java
public void resetD1Databases()
```

##### `resetDurableObjectNamespaces` <a name="resetDurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetDurableObjectNamespaces"></a>

```java
public void resetDurableObjectNamespaces()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetFailOpen"></a>

```java
public void resetFailOpen()
```

##### `resetKvNamespaces` <a name="resetKvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetKvNamespaces"></a>

```java
public void resetKvNamespaces()
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetPlacement"></a>

```java
public void resetPlacement()
```

##### `resetR2Buckets` <a name="resetR2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetR2Buckets"></a>

```java
public void resetR2Buckets()
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetSecrets"></a>

```java
public void resetSecrets()
```

##### `resetServiceBinding` <a name="resetServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetServiceBinding"></a>

```java
public void resetServiceBinding()
```

##### `resetUsageModel` <a name="resetUsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetUsageModel"></a>

```java
public void resetUsageModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference">PagesProjectDeploymentConfigsPreviewPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBinding">serviceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList">PagesProjectDeploymentConfigsPreviewServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDateInput">alwaysUseLatestCompatibilityDateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDateInput">compatibilityDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlagsInput">compatibilityFlagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1DatabasesInput">d1DatabasesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespacesInput">durableObjectNamespacesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespacesInput">kvNamespacesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placementInput">placementInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2BucketsInput">r2BucketsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secretsInput">secretsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBindingInput">serviceBindingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModelInput">usageModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDate">alwaysUseLatestCompatibilityDate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1Databases">d1Databases</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespaces">durableObjectNamespaces</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespaces">kvNamespaces</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2Buckets">r2Buckets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModel">usageModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placement"></a>

```java
public PagesProjectDeploymentConfigsPreviewPlacementOutputReference getPlacement();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference">PagesProjectDeploymentConfigsPreviewPlacementOutputReference</a>

---

##### `serviceBinding`<sup>Required</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBinding"></a>

```java
public PagesProjectDeploymentConfigsPreviewServiceBindingList getServiceBinding();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList">PagesProjectDeploymentConfigsPreviewServiceBindingList</a>

---

##### `alwaysUseLatestCompatibilityDateInput`<sup>Optional</sup> <a name="alwaysUseLatestCompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDateInput"></a>

```java
public java.lang.Object getAlwaysUseLatestCompatibilityDateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compatibilityDateInput`<sup>Optional</sup> <a name="compatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDateInput"></a>

```java
public java.lang.String getCompatibilityDateInput();
```

- *Type:* java.lang.String

---

##### `compatibilityFlagsInput`<sup>Optional</sup> <a name="compatibilityFlagsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlagsInput"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `d1DatabasesInput`<sup>Optional</sup> <a name="d1DatabasesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1DatabasesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getD1DatabasesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `durableObjectNamespacesInput`<sup>Optional</sup> <a name="durableObjectNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespacesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDurableObjectNamespacesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpenInput"></a>

```java
public java.lang.Object getFailOpenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kvNamespacesInput`<sup>Optional</sup> <a name="kvNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespacesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKvNamespacesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placementInput"></a>

```java
public PagesProjectDeploymentConfigsPreviewPlacement getPlacementInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

---

##### `r2BucketsInput`<sup>Optional</sup> <a name="r2BucketsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2BucketsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getR2BucketsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secretsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecretsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceBindingInput`<sup>Optional</sup> <a name="serviceBindingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBindingInput"></a>

```java
public java.lang.Object getServiceBindingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>>

---

##### `usageModelInput`<sup>Optional</sup> <a name="usageModelInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModelInput"></a>

```java
public java.lang.String getUsageModelInput();
```

- *Type:* java.lang.String

---

##### `alwaysUseLatestCompatibilityDate`<sup>Required</sup> <a name="alwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDate"></a>

```java
public java.lang.Object getAlwaysUseLatestCompatibilityDate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDate"></a>

```java
public java.lang.String getCompatibilityDate();
```

- *Type:* java.lang.String

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlags"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `d1Databases`<sup>Required</sup> <a name="d1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1Databases"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getD1Databases();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `durableObjectNamespaces`<sup>Required</sup> <a name="durableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespaces"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDurableObjectNamespaces();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpen"></a>

```java
public java.lang.Object getFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kvNamespaces`<sup>Required</sup> <a name="kvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespaces"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKvNamespaces();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `r2Buckets`<sup>Required</sup> <a name="r2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2Buckets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getR2Buckets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModel"></a>

```java
public java.lang.String getUsageModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.internalValue"></a>

```java
public PagesProjectDeploymentConfigsPreview getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---


### PagesProjectDeploymentConfigsPreviewPlacementOutputReference <a name="PagesProjectDeploymentConfigsPreviewPlacementOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsPreviewPlacementOutputReference;

new PagesProjectDeploymentConfigsPreviewPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.internalValue"></a>

```java
public PagesProjectDeploymentConfigsPreviewPlacement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

---


### PagesProjectDeploymentConfigsPreviewServiceBindingList <a name="PagesProjectDeploymentConfigsPreviewServiceBindingList" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsPreviewServiceBindingList;

new PagesProjectDeploymentConfigsPreviewServiceBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get"></a>

```java
public PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>>

---


### PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference <a name="PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference;

new PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>

---


### PagesProjectDeploymentConfigsProductionOutputReference <a name="PagesProjectDeploymentConfigsProductionOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsProductionOutputReference;

new PagesProjectDeploymentConfigsProductionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding">putServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetAlwaysUseLatestCompatibilityDate">resetAlwaysUseLatestCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityDate">resetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityFlags">resetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetD1Databases">resetD1Databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetDurableObjectNamespaces">resetDurableObjectNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetKvNamespaces">resetKvNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetR2Buckets">resetR2Buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetServiceBinding">resetServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetUsageModel">resetUsageModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement"></a>

```java
public void putPlacement(PagesProjectDeploymentConfigsProductionPlacement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

---

##### `putServiceBinding` <a name="putServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding"></a>

```java
public void putServiceBinding(IResolvable OR java.util.List<PagesProjectDeploymentConfigsProductionServiceBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>>

---

##### `resetAlwaysUseLatestCompatibilityDate` <a name="resetAlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetAlwaysUseLatestCompatibilityDate"></a>

```java
public void resetAlwaysUseLatestCompatibilityDate()
```

##### `resetCompatibilityDate` <a name="resetCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityDate"></a>

```java
public void resetCompatibilityDate()
```

##### `resetCompatibilityFlags` <a name="resetCompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityFlags"></a>

```java
public void resetCompatibilityFlags()
```

##### `resetD1Databases` <a name="resetD1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetD1Databases"></a>

```java
public void resetD1Databases()
```

##### `resetDurableObjectNamespaces` <a name="resetDurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetDurableObjectNamespaces"></a>

```java
public void resetDurableObjectNamespaces()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetFailOpen"></a>

```java
public void resetFailOpen()
```

##### `resetKvNamespaces` <a name="resetKvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetKvNamespaces"></a>

```java
public void resetKvNamespaces()
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetPlacement"></a>

```java
public void resetPlacement()
```

##### `resetR2Buckets` <a name="resetR2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetR2Buckets"></a>

```java
public void resetR2Buckets()
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetSecrets"></a>

```java
public void resetSecrets()
```

##### `resetServiceBinding` <a name="resetServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetServiceBinding"></a>

```java
public void resetServiceBinding()
```

##### `resetUsageModel` <a name="resetUsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetUsageModel"></a>

```java
public void resetUsageModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference">PagesProjectDeploymentConfigsProductionPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBinding">serviceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList">PagesProjectDeploymentConfigsProductionServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDateInput">alwaysUseLatestCompatibilityDateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDateInput">compatibilityDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlagsInput">compatibilityFlagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1DatabasesInput">d1DatabasesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespacesInput">durableObjectNamespacesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespacesInput">kvNamespacesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placementInput">placementInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2BucketsInput">r2BucketsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secretsInput">secretsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBindingInput">serviceBindingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModelInput">usageModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDate">alwaysUseLatestCompatibilityDate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1Databases">d1Databases</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespaces">durableObjectNamespaces</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespaces">kvNamespaces</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2Buckets">r2Buckets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModel">usageModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placement"></a>

```java
public PagesProjectDeploymentConfigsProductionPlacementOutputReference getPlacement();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference">PagesProjectDeploymentConfigsProductionPlacementOutputReference</a>

---

##### `serviceBinding`<sup>Required</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBinding"></a>

```java
public PagesProjectDeploymentConfigsProductionServiceBindingList getServiceBinding();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList">PagesProjectDeploymentConfigsProductionServiceBindingList</a>

---

##### `alwaysUseLatestCompatibilityDateInput`<sup>Optional</sup> <a name="alwaysUseLatestCompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDateInput"></a>

```java
public java.lang.Object getAlwaysUseLatestCompatibilityDateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compatibilityDateInput`<sup>Optional</sup> <a name="compatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDateInput"></a>

```java
public java.lang.String getCompatibilityDateInput();
```

- *Type:* java.lang.String

---

##### `compatibilityFlagsInput`<sup>Optional</sup> <a name="compatibilityFlagsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlagsInput"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `d1DatabasesInput`<sup>Optional</sup> <a name="d1DatabasesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1DatabasesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getD1DatabasesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `durableObjectNamespacesInput`<sup>Optional</sup> <a name="durableObjectNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespacesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDurableObjectNamespacesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpenInput"></a>

```java
public java.lang.Object getFailOpenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kvNamespacesInput`<sup>Optional</sup> <a name="kvNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespacesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKvNamespacesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placementInput"></a>

```java
public PagesProjectDeploymentConfigsProductionPlacement getPlacementInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

---

##### `r2BucketsInput`<sup>Optional</sup> <a name="r2BucketsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2BucketsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getR2BucketsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secretsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecretsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceBindingInput`<sup>Optional</sup> <a name="serviceBindingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBindingInput"></a>

```java
public java.lang.Object getServiceBindingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>>

---

##### `usageModelInput`<sup>Optional</sup> <a name="usageModelInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModelInput"></a>

```java
public java.lang.String getUsageModelInput();
```

- *Type:* java.lang.String

---

##### `alwaysUseLatestCompatibilityDate`<sup>Required</sup> <a name="alwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDate"></a>

```java
public java.lang.Object getAlwaysUseLatestCompatibilityDate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDate"></a>

```java
public java.lang.String getCompatibilityDate();
```

- *Type:* java.lang.String

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlags"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `d1Databases`<sup>Required</sup> <a name="d1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1Databases"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getD1Databases();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `durableObjectNamespaces`<sup>Required</sup> <a name="durableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespaces"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDurableObjectNamespaces();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpen"></a>

```java
public java.lang.Object getFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kvNamespaces`<sup>Required</sup> <a name="kvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespaces"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKvNamespaces();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `r2Buckets`<sup>Required</sup> <a name="r2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2Buckets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getR2Buckets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModel"></a>

```java
public java.lang.String getUsageModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.internalValue"></a>

```java
public PagesProjectDeploymentConfigsProduction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---


### PagesProjectDeploymentConfigsProductionPlacementOutputReference <a name="PagesProjectDeploymentConfigsProductionPlacementOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsProductionPlacementOutputReference;

new PagesProjectDeploymentConfigsProductionPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.internalValue"></a>

```java
public PagesProjectDeploymentConfigsProductionPlacement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

---


### PagesProjectDeploymentConfigsProductionServiceBindingList <a name="PagesProjectDeploymentConfigsProductionServiceBindingList" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsProductionServiceBindingList;

new PagesProjectDeploymentConfigsProductionServiceBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get"></a>

```java
public PagesProjectDeploymentConfigsProductionServiceBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>>

---


### PagesProjectDeploymentConfigsProductionServiceBindingOutputReference <a name="PagesProjectDeploymentConfigsProductionServiceBindingOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference;

new PagesProjectDeploymentConfigsProductionServiceBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>

---


### PagesProjectSourceConfigOutputReference <a name="PagesProjectSourceConfigOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectSourceConfigOutputReference;

new PagesProjectSourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetDeploymentsEnabled">resetDeploymentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPrCommentsEnabled">resetPrCommentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchExcludes">resetPreviewBranchExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchIncludes">resetPreviewBranchIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewDeploymentSetting">resetPreviewDeploymentSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetProductionDeploymentEnabled">resetProductionDeploymentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetRepoName">resetRepoName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeploymentsEnabled` <a name="resetDeploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetDeploymentsEnabled"></a>

```java
public void resetDeploymentsEnabled()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetPrCommentsEnabled` <a name="resetPrCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPrCommentsEnabled"></a>

```java
public void resetPrCommentsEnabled()
```

##### `resetPreviewBranchExcludes` <a name="resetPreviewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchExcludes"></a>

```java
public void resetPreviewBranchExcludes()
```

##### `resetPreviewBranchIncludes` <a name="resetPreviewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchIncludes"></a>

```java
public void resetPreviewBranchIncludes()
```

##### `resetPreviewDeploymentSetting` <a name="resetPreviewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewDeploymentSetting"></a>

```java
public void resetPreviewDeploymentSetting()
```

##### `resetProductionDeploymentEnabled` <a name="resetProductionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetProductionDeploymentEnabled"></a>

```java
public void resetProductionDeploymentEnabled()
```

##### `resetRepoName` <a name="resetRepoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetRepoName"></a>

```java
public void resetRepoName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabledInput">deploymentsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabledInput">prCommentsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludesInput">previewBranchExcludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludesInput">previewBranchIncludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSettingInput">previewDeploymentSettingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranchInput">productionBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabledInput">productionDeploymentEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoNameInput">repoNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabled">deploymentsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabled">prCommentsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludes">previewBranchExcludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludes">previewBranchIncludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSetting">previewDeploymentSetting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranch">productionBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabled">productionDeploymentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoName">repoName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploymentsEnabledInput`<sup>Optional</sup> <a name="deploymentsEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabledInput"></a>

```java
public java.lang.Object getDeploymentsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `prCommentsEnabledInput`<sup>Optional</sup> <a name="prCommentsEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabledInput"></a>

```java
public java.lang.Object getPrCommentsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `previewBranchExcludesInput`<sup>Optional</sup> <a name="previewBranchExcludesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludesInput"></a>

```java
public java.util.List<java.lang.String> getPreviewBranchExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `previewBranchIncludesInput`<sup>Optional</sup> <a name="previewBranchIncludesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludesInput"></a>

```java
public java.util.List<java.lang.String> getPreviewBranchIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `previewDeploymentSettingInput`<sup>Optional</sup> <a name="previewDeploymentSettingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSettingInput"></a>

```java
public java.lang.String getPreviewDeploymentSettingInput();
```

- *Type:* java.lang.String

---

##### `productionBranchInput`<sup>Optional</sup> <a name="productionBranchInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranchInput"></a>

```java
public java.lang.String getProductionBranchInput();
```

- *Type:* java.lang.String

---

##### `productionDeploymentEnabledInput`<sup>Optional</sup> <a name="productionDeploymentEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabledInput"></a>

```java
public java.lang.Object getProductionDeploymentEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repoNameInput`<sup>Optional</sup> <a name="repoNameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoNameInput"></a>

```java
public java.lang.String getRepoNameInput();
```

- *Type:* java.lang.String

---

##### `deploymentsEnabled`<sup>Required</sup> <a name="deploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabled"></a>

```java
public java.lang.Object getDeploymentsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `prCommentsEnabled`<sup>Required</sup> <a name="prCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabled"></a>

```java
public java.lang.Object getPrCommentsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `previewBranchExcludes`<sup>Required</sup> <a name="previewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludes"></a>

```java
public java.util.List<java.lang.String> getPreviewBranchExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `previewBranchIncludes`<sup>Required</sup> <a name="previewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludes"></a>

```java
public java.util.List<java.lang.String> getPreviewBranchIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `previewDeploymentSetting`<sup>Required</sup> <a name="previewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSetting"></a>

```java
public java.lang.String getPreviewDeploymentSetting();
```

- *Type:* java.lang.String

---

##### `productionBranch`<sup>Required</sup> <a name="productionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranch"></a>

```java
public java.lang.String getProductionBranch();
```

- *Type:* java.lang.String

---

##### `productionDeploymentEnabled`<sup>Required</sup> <a name="productionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabled"></a>

```java
public java.lang.Object getProductionDeploymentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.internalValue"></a>

```java
public PagesProjectSourceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---


### PagesProjectSourceOutputReference <a name="PagesProjectSourceOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.pages_project.PagesProjectSourceOutputReference;

new PagesProjectSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig"></a>

```java
public void putConfig(PagesProjectSourceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference">PagesProjectSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.config"></a>

```java
public PagesProjectSourceConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference">PagesProjectSourceConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.configInput"></a>

```java
public PagesProjectSourceConfig getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.internalValue"></a>

```java
public PagesProjectSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---



