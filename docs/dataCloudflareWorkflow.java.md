# `dataCloudflareWorkflow` Submodule <a name="`dataCloudflareWorkflow` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkflow <a name="DataCloudflareWorkflow" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow cloudflare_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_workflow.DataCloudflareWorkflow;

DataCloudflareWorkflow.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .filter(DataCloudflareWorkflowFilter)
//  .workflowName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#account_id DataCloudflareWorkflow#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#filter DataCloudflareWorkflow#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.workflowName">workflowName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#workflow_name DataCloudflareWorkflow#workflow_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#account_id DataCloudflareWorkflow#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#filter DataCloudflareWorkflow#filter}.

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.workflowName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#workflow_name DataCloudflareWorkflow#workflow_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetWorkflowName">resetWorkflowName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.putFilter"></a>

```java
public void putFilter(DataCloudflareWorkflowFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetWorkflowName` <a name="resetWorkflowName" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetWorkflowName"></a>

```java
public void resetWorkflowName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_workflow.DataCloudflareWorkflow;

DataCloudflareWorkflow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_workflow.DataCloudflareWorkflow;

DataCloudflareWorkflow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_workflow.DataCloudflareWorkflow;

DataCloudflareWorkflow.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_workflow.DataCloudflareWorkflow;

DataCloudflareWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.className">className</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference">DataCloudflareWorkflowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference">DataCloudflareWorkflowInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.triggeredOn">triggeredOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.workflowNameInput">workflowNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `className`<sup>Required</sup> <a name="className" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.className"></a>

```java
public java.lang.String getClassName();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.filter"></a>

```java
public DataCloudflareWorkflowFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference">DataCloudflareWorkflowFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.instances"></a>

```java
public DataCloudflareWorkflowInstancesOutputReference getInstances();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference">DataCloudflareWorkflowInstancesOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

---

##### `triggeredOn`<sup>Required</sup> <a name="triggeredOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.triggeredOn"></a>

```java
public java.lang.String getTriggeredOn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.filterInput"></a>

```java
public IResolvable|DataCloudflareWorkflowFilter getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a>

---

##### `workflowNameInput`<sup>Optional</sup> <a name="workflowNameInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.workflowNameInput"></a>

```java
public java.lang.String getWorkflowNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkflowConfig <a name="DataCloudflareWorkflowConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_workflow.DataCloudflareWorkflowConfig;

DataCloudflareWorkflowConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .filter(DataCloudflareWorkflowFilter)
//  .workflowName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#account_id DataCloudflareWorkflow#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#filter DataCloudflareWorkflow#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#workflow_name DataCloudflareWorkflow#workflow_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#account_id DataCloudflareWorkflow#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.filter"></a>

```java
public DataCloudflareWorkflowFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#filter DataCloudflareWorkflow#filter}.

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#workflow_name DataCloudflareWorkflow#workflow_name}.

---

### DataCloudflareWorkflowFilter <a name="DataCloudflareWorkflowFilter" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_workflow.DataCloudflareWorkflowFilter;

DataCloudflareWorkflowFilter.builder()
//  .search(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter.property.search">search</a></code> | <code>java.lang.String</code> | Allows filtering workflows` name. |

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Allows filtering workflows` name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#search DataCloudflareWorkflow#search}

---

### DataCloudflareWorkflowInstances <a name="DataCloudflareWorkflowInstances" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_workflow.DataCloudflareWorkflowInstances;

DataCloudflareWorkflowInstances.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkflowFilterOutputReference <a name="DataCloudflareWorkflowFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_workflow.DataCloudflareWorkflowFilterOutputReference;

new DataCloudflareWorkflowFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.resetSearch"></a>

```java
public void resetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareWorkflowFilter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a>

---


### DataCloudflareWorkflowInstancesOutputReference <a name="DataCloudflareWorkflowInstancesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_workflow.DataCloudflareWorkflowInstancesOutputReference;

new DataCloudflareWorkflowInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.complete">complete</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.errored">errored</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.paused">paused</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.queued">queued</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.running">running</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.terminated">terminated</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.waiting">waiting</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.waitingForPause">waitingForPause</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstances">DataCloudflareWorkflowInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `complete`<sup>Required</sup> <a name="complete" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.complete"></a>

```java
public java.lang.Number getComplete();
```

- *Type:* java.lang.Number

---

##### `errored`<sup>Required</sup> <a name="errored" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.errored"></a>

```java
public java.lang.Number getErrored();
```

- *Type:* java.lang.Number

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.paused"></a>

```java
public java.lang.Number getPaused();
```

- *Type:* java.lang.Number

---

##### `queued`<sup>Required</sup> <a name="queued" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.queued"></a>

```java
public java.lang.Number getQueued();
```

- *Type:* java.lang.Number

---

##### `running`<sup>Required</sup> <a name="running" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.running"></a>

```java
public java.lang.Number getRunning();
```

- *Type:* java.lang.Number

---

##### `terminated`<sup>Required</sup> <a name="terminated" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.terminated"></a>

```java
public java.lang.Number getTerminated();
```

- *Type:* java.lang.Number

---

##### `waiting`<sup>Required</sup> <a name="waiting" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.waiting"></a>

```java
public java.lang.Number getWaiting();
```

- *Type:* java.lang.Number

---

##### `waitingForPause`<sup>Required</sup> <a name="waitingForPause" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.waitingForPause"></a>

```java
public java.lang.Number getWaitingForPause();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkflowInstances getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstances">DataCloudflareWorkflowInstances</a>

---



