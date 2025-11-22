# `dataCloudflareWorkflow` Submodule <a name="`dataCloudflareWorkflow` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkflow <a name="DataCloudflareWorkflow" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow cloudflare_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkflow(Construct Scope, string Id, DataCloudflareWorkflowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig">DataCloudflareWorkflowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig">DataCloudflareWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareWorkflowFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.resetWorkflowName"></a>

```csharp
private void ResetWorkflowName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkflow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkflow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkflow.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkflow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareWorkflow resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareWorkflow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.className">ClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference">DataCloudflareWorkflowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.instances">Instances</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference">DataCloudflareWorkflowInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.scriptName">ScriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.triggeredOn">TriggeredOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.filterInput">FilterInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.workflowNameInput">WorkflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.workflowName">WorkflowName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.className"></a>

```csharp
public string ClassName { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.filter"></a>

```csharp
public DataCloudflareWorkflowFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference">DataCloudflareWorkflowFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.instances"></a>

```csharp
public DataCloudflareWorkflowInstancesOutputReference Instances { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference">DataCloudflareWorkflowInstancesOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.scriptName"></a>

```csharp
public string ScriptName { get; }
```

- *Type:* string

---

##### `TriggeredOn`<sup>Required</sup> <a name="TriggeredOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.triggeredOn"></a>

```csharp
public string TriggeredOn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareWorkflowFilter FilterInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a>

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.workflowNameInput"></a>

```csharp
public string WorkflowNameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.workflowName"></a>

```csharp
public string WorkflowName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkflowConfig <a name="DataCloudflareWorkflowConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkflowConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    DataCloudflareWorkflowFilter Filter = null,
    string WorkflowName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#account_id DataCloudflareWorkflow#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#filter DataCloudflareWorkflow#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.workflowName">WorkflowName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#workflow_name DataCloudflareWorkflow#workflow_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#account_id DataCloudflareWorkflow#account_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.filter"></a>

```csharp
public DataCloudflareWorkflowFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#filter DataCloudflareWorkflow#filter}.

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowConfig.property.workflowName"></a>

```csharp
public string WorkflowName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#workflow_name DataCloudflareWorkflow#workflow_name}.

---

### DataCloudflareWorkflowFilter <a name="DataCloudflareWorkflowFilter" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkflowFilter {
    string Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter.property.search">Search</a></code> | <code>string</code> | Allows filtering workflows` name. |

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Allows filtering workflows` name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/workflow#search DataCloudflareWorkflow#search}

---

### DataCloudflareWorkflowInstances <a name="DataCloudflareWorkflowInstances" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkflowInstances {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkflowFilterOutputReference <a name="DataCloudflareWorkflowFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkflowFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.resetSearch"></a>

```csharp
private void ResetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareWorkflowFilter InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowFilter">DataCloudflareWorkflowFilter</a>

---


### DataCloudflareWorkflowInstancesOutputReference <a name="DataCloudflareWorkflowInstancesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkflowInstancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.complete">Complete</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.errored">Errored</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.paused">Paused</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.queued">Queued</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.running">Running</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.terminated">Terminated</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.waiting">Waiting</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.waitingForPause">WaitingForPause</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstances">DataCloudflareWorkflowInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Complete`<sup>Required</sup> <a name="Complete" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.complete"></a>

```csharp
public double Complete { get; }
```

- *Type:* double

---

##### `Errored`<sup>Required</sup> <a name="Errored" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.errored"></a>

```csharp
public double Errored { get; }
```

- *Type:* double

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.paused"></a>

```csharp
public double Paused { get; }
```

- *Type:* double

---

##### `Queued`<sup>Required</sup> <a name="Queued" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.queued"></a>

```csharp
public double Queued { get; }
```

- *Type:* double

---

##### `Running`<sup>Required</sup> <a name="Running" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.running"></a>

```csharp
public double Running { get; }
```

- *Type:* double

---

##### `Terminated`<sup>Required</sup> <a name="Terminated" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.terminated"></a>

```csharp
public double Terminated { get; }
```

- *Type:* double

---

##### `Waiting`<sup>Required</sup> <a name="Waiting" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.waiting"></a>

```csharp
public double Waiting { get; }
```

- *Type:* double

---

##### `WaitingForPause`<sup>Required</sup> <a name="WaitingForPause" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.waitingForPause"></a>

```csharp
public double WaitingForPause { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstancesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkflowInstances InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkflow.DataCloudflareWorkflowInstances">DataCloudflareWorkflowInstances</a>

---



