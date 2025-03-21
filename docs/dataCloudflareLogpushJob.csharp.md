# `dataCloudflareLogpushJob` Submodule <a name="`dataCloudflareLogpushJob` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLogpushJob <a name="DataCloudflareLogpushJob" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/logpush_job cloudflare_logpush_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLogpushJob(Construct Scope, string Id, DataCloudflareLogpushJobConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig">DataCloudflareLogpushJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig">DataCloudflareLogpushJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetJobId">ResetJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetJobId` <a name="ResetJobId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetJobId"></a>

```csharp
private void ResetJobId()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareLogpushJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLogpushJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLogpushJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLogpushJob.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLogpushJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareLogpushJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLogpushJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLogpushJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/logpush_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLogpushJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.destinationConf">DestinationConf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lastComplete">LastComplete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lastError">LastError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.logpullOptions">LogpullOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadBytes">MaxUploadBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadIntervalSeconds">MaxUploadIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadRecords">MaxUploadRecords</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.outputOptions">OutputOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference">DataCloudflareLogpushJobOutputOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.jobIdInput">JobIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.jobId">JobId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `DestinationConf`<sup>Required</sup> <a name="DestinationConf" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.destinationConf"></a>

```csharp
public string DestinationConf { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LastComplete`<sup>Required</sup> <a name="LastComplete" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lastComplete"></a>

```csharp
public string LastComplete { get; }
```

- *Type:* string

---

##### `LastError`<sup>Required</sup> <a name="LastError" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.lastError"></a>

```csharp
public string LastError { get; }
```

- *Type:* string

---

##### `LogpullOptions`<sup>Required</sup> <a name="LogpullOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.logpullOptions"></a>

```csharp
public string LogpullOptions { get; }
```

- *Type:* string

---

##### `MaxUploadBytes`<sup>Required</sup> <a name="MaxUploadBytes" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadBytes"></a>

```csharp
public double MaxUploadBytes { get; }
```

- *Type:* double

---

##### `MaxUploadIntervalSeconds`<sup>Required</sup> <a name="MaxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadIntervalSeconds"></a>

```csharp
public double MaxUploadIntervalSeconds { get; }
```

- *Type:* double

---

##### `MaxUploadRecords`<sup>Required</sup> <a name="MaxUploadRecords" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.maxUploadRecords"></a>

```csharp
public double MaxUploadRecords { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputOptions`<sup>Required</sup> <a name="OutputOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.outputOptions"></a>

```csharp
public DataCloudflareLogpushJobOutputOptionsOutputReference OutputOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference">DataCloudflareLogpushJobOutputOptionsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.jobIdInput"></a>

```csharp
public double JobIdInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.jobId"></a>

```csharp
public double JobId { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLogpushJobConfig <a name="DataCloudflareLogpushJobConfig" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLogpushJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId = null,
    double JobId = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.jobId">JobId</a></code> | <code>double</code> | Unique id of the job. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/logpush_job#account_id DataCloudflareLogpushJob#account_id}

---

##### `JobId`<sup>Optional</sup> <a name="JobId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.jobId"></a>

```csharp
public double JobId { get; set; }
```

- *Type:* double

Unique id of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/logpush_job#job_id DataCloudflareLogpushJob#job_id}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/logpush_job#zone_id DataCloudflareLogpushJob#zone_id}

---

### DataCloudflareLogpushJobOutputOptions <a name="DataCloudflareLogpushJobOutputOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLogpushJobOutputOptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLogpushJobOutputOptionsOutputReference <a name="DataCloudflareLogpushJobOutputOptionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLogpushJobOutputOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.batchPrefix">BatchPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.batchSuffix">BatchSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.cve202144228">Cve202144228</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fieldNames">FieldNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordPrefix">RecordPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordSuffix">RecordSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordTemplate">RecordTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.sampleRate">SampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptions">DataCloudflareLogpushJobOutputOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchPrefix`<sup>Required</sup> <a name="BatchPrefix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.batchPrefix"></a>

```csharp
public string BatchPrefix { get; }
```

- *Type:* string

---

##### `BatchSuffix`<sup>Required</sup> <a name="BatchSuffix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.batchSuffix"></a>

```csharp
public string BatchSuffix { get; }
```

- *Type:* string

---

##### `Cve202144228`<sup>Required</sup> <a name="Cve202144228" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.cve202144228"></a>

```csharp
public IResolvable Cve202144228 { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `FieldNames`<sup>Required</sup> <a name="FieldNames" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.fieldNames"></a>

```csharp
public string[] FieldNames { get; }
```

- *Type:* string[]

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordDelimiter"></a>

```csharp
public string RecordDelimiter { get; }
```

- *Type:* string

---

##### `RecordPrefix`<sup>Required</sup> <a name="RecordPrefix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordPrefix"></a>

```csharp
public string RecordPrefix { get; }
```

- *Type:* string

---

##### `RecordSuffix`<sup>Required</sup> <a name="RecordSuffix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordSuffix"></a>

```csharp
public string RecordSuffix { get; }
```

- *Type:* string

---

##### `RecordTemplate`<sup>Required</sup> <a name="RecordTemplate" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.recordTemplate"></a>

```csharp
public string RecordTemplate { get; }
```

- *Type:* string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.sampleRate"></a>

```csharp
public double SampleRate { get; }
```

- *Type:* double

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptionsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLogpushJobOutputOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJob.DataCloudflareLogpushJobOutputOptions">DataCloudflareLogpushJobOutputOptions</a>

---



