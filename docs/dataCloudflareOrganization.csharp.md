# `dataCloudflareOrganization` Submodule <a name="`dataCloudflareOrganization` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareOrganization <a name="DataCloudflareOrganization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization cloudflare_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganization(Construct Scope, string Id, DataCloudflareOrganizationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig">DataCloudflareOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig">DataCloudflareOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareOrganizationFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOrganizationId"></a>

```csharp
private void ResetOrganizationId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareOrganization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareOrganization.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareOrganization resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference">DataCloudflareOrganizationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.meta">Meta</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference">DataCloudflareOrganizationMetaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.parent">Parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference">DataCloudflareOrganizationParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.profile">Profile</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference">DataCloudflareOrganizationProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filterInput">FilterInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filter"></a>

```csharp
public DataCloudflareOrganizationFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference">DataCloudflareOrganizationFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.meta"></a>

```csharp
public DataCloudflareOrganizationMetaOutputReference Meta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference">DataCloudflareOrganizationMetaOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.parent"></a>

```csharp
public DataCloudflareOrganizationParentOutputReference Parent { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference">DataCloudflareOrganizationParentOutputReference</a>

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.profile"></a>

```csharp
public DataCloudflareOrganizationProfileOutputReference Profile { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference">DataCloudflareOrganizationProfileOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareOrganizationFilter FilterInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareOrganizationConfig <a name="DataCloudflareOrganizationConfig" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DataCloudflareOrganizationFilter Filter = null,
    string OrganizationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#filter DataCloudflareOrganization#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.organizationId">OrganizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization_id DataCloudflareOrganization#organization_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.filter"></a>

```csharp
public DataCloudflareOrganizationFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#filter DataCloudflareOrganization#filter}.

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization_id DataCloudflareOrganization#organization_id}.

---

### DataCloudflareOrganizationFilter <a name="DataCloudflareOrganizationFilter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationFilter {
    DataCloudflareOrganizationFilterContaining Containing = null,
    string[] Id = null,
    DataCloudflareOrganizationFilterName Name = null,
    double PageSize = null,
    string PageToken = null,
    DataCloudflareOrganizationFilterParent Parent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.containing">Containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#containing DataCloudflareOrganization#containing}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.id">Id</a></code> | <code>string[]</code> | Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#name DataCloudflareOrganization#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageSize">PageSize</a></code> | <code>double</code> | The amount of items to return. Defaults to 10. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageToken">PageToken</a></code> | <code>string</code> | An opaque token returned from the last list response that when provided will retrieve the next page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.parent">Parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#parent DataCloudflareOrganization#parent}. |

---

##### `Containing`<sup>Optional</sup> <a name="Containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.containing"></a>

```csharp
public DataCloudflareOrganizationFilterContaining Containing { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#containing DataCloudflareOrganization#containing}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#id DataCloudflareOrganization#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.name"></a>

```csharp
public DataCloudflareOrganizationFilterName Name { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#name DataCloudflareOrganization#name}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

The amount of items to return. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#page_size DataCloudflareOrganization#page_size}

---

##### `PageToken`<sup>Optional</sup> <a name="PageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageToken"></a>

```csharp
public string PageToken { get; set; }
```

- *Type:* string

An opaque token returned from the last list response that when provided will retrieve the next page.

Parameters used to filter the retrieved list must remain in subsequent
requests with a page token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#page_token DataCloudflareOrganization#page_token}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.parent"></a>

```csharp
public DataCloudflareOrganizationFilterParent Parent { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#parent DataCloudflareOrganization#parent}.

---

### DataCloudflareOrganizationFilterContaining <a name="DataCloudflareOrganizationFilterContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationFilterContaining {
    string Account = null,
    string Organization = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.account">Account</a></code> | <code>string</code> | Filter the list of organizations to the ones that contain this particular account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.organization">Organization</a></code> | <code>string</code> | Filter the list of organizations to the ones that contain this particular organization. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.user">User</a></code> | <code>string</code> | Filter the list of organizations to the ones that contain this particular user. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.account"></a>

```csharp
public string Account { get; set; }
```

- *Type:* string

Filter the list of organizations to the ones that contain this particular account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#account DataCloudflareOrganization#account}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Filter the list of organizations to the ones that contain this particular organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization DataCloudflareOrganization#organization}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Filter the list of organizations to the ones that contain this particular user.

IMPORTANT: Just because an organization "contains" a user is not a
representation of any authorization or privilege to manage any resources
therein. An organization "containing" a user simply means the user is managed by
that organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#user DataCloudflareOrganization#user}

---

### DataCloudflareOrganizationFilterName <a name="DataCloudflareOrganizationFilterName" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationFilterName {
    string Contains = null,
    string EndsWith = null,
    string StartsWith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.contains">Contains</a></code> | <code>string</code> | (case-insensitive) Filter the list of organizations to where the name contains a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.endsWith">EndsWith</a></code> | <code>string</code> | (case-insensitive) Filter the list of organizations to where the name ends with a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.startsWith">StartsWith</a></code> | <code>string</code> | (case-insensitive) Filter the list of organizations to where the name starts with a particular string. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.contains"></a>

```csharp
public string Contains { get; set; }
```

- *Type:* string

(case-insensitive) Filter the list of organizations to where the name contains a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#contains DataCloudflareOrganization#contains}

---

##### `EndsWith`<sup>Optional</sup> <a name="EndsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.endsWith"></a>

```csharp
public string EndsWith { get; set; }
```

- *Type:* string

(case-insensitive) Filter the list of organizations to where the name ends with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#ends_with DataCloudflareOrganization#ends_with}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.startsWith"></a>

```csharp
public string StartsWith { get; set; }
```

- *Type:* string

(case-insensitive) Filter the list of organizations to where the name starts with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#starts_with DataCloudflareOrganization#starts_with}

---

### DataCloudflareOrganizationFilterParent <a name="DataCloudflareOrganizationFilterParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationFilterParent {
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent.property.id">Id</a></code> | <code>string</code> | Filter the list of organizations to the ones that are a sub-organization of the specified organization. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Filter the list of organizations to the ones that are a sub-organization of the specified organization.

"null" is a valid value to provide for this parameter. It means "where
an organization has no parent (i.e. it is a 'root' organization)."

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#id DataCloudflareOrganization#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareOrganizationMeta <a name="DataCloudflareOrganizationMeta" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationMeta {

};
```


### DataCloudflareOrganizationMetaFlags <a name="DataCloudflareOrganizationMetaFlags" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationMetaFlags {

};
```


### DataCloudflareOrganizationParent <a name="DataCloudflareOrganizationParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationParent {

};
```


### DataCloudflareOrganizationProfile <a name="DataCloudflareOrganizationProfile" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationProfile {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareOrganizationFilterContainingOutputReference <a name="DataCloudflareOrganizationFilterContainingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationFilterContainingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.accountInput">AccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.account">Account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.accountInput"></a>

```csharp
public string AccountInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.account"></a>

```csharp
public string Account { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareOrganizationFilterContaining InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

---


### DataCloudflareOrganizationFilterNameOutputReference <a name="DataCloudflareOrganizationFilterNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationFilterNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetEndsWith">ResetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetStartsWith">ResetStartsWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetContains"></a>

```csharp
private void ResetContains()
```

##### `ResetEndsWith` <a name="ResetEndsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetEndsWith"></a>

```csharp
private void ResetEndsWith()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.containsInput">ContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWithInput">EndsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWithInput">StartsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.contains">Contains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWith">EndsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWith">StartsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.containsInput"></a>

```csharp
public string ContainsInput { get; }
```

- *Type:* string

---

##### `EndsWithInput`<sup>Optional</sup> <a name="EndsWithInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWithInput"></a>

```csharp
public string EndsWithInput { get; }
```

- *Type:* string

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWithInput"></a>

```csharp
public string StartsWithInput { get; }
```

- *Type:* string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.contains"></a>

```csharp
public string Contains { get; }
```

- *Type:* string

---

##### `EndsWith`<sup>Required</sup> <a name="EndsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWith"></a>

```csharp
public string EndsWith { get; }
```

- *Type:* string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWith"></a>

```csharp
public string StartsWith { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareOrganizationFilterName InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

---


### DataCloudflareOrganizationFilterOutputReference <a name="DataCloudflareOrganizationFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putContaining">PutContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putName">PutName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putParent">PutParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetContaining">ResetContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageToken">ResetPageToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetParent">ResetParent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContaining` <a name="PutContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putContaining"></a>

```csharp
private void PutContaining(DataCloudflareOrganizationFilterContaining Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putContaining.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

---

##### `PutName` <a name="PutName" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putName"></a>

```csharp
private void PutName(DataCloudflareOrganizationFilterName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

---

##### `PutParent` <a name="PutParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putParent"></a>

```csharp
private void PutParent(DataCloudflareOrganizationFilterParent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putParent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

---

##### `ResetContaining` <a name="ResetContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetContaining"></a>

```csharp
private void ResetContaining()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetPageToken` <a name="ResetPageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageToken"></a>

```csharp
private void ResetPageToken()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetParent"></a>

```csharp
private void ResetParent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containing">Containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference">DataCloudflareOrganizationFilterContainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference">DataCloudflareOrganizationFilterNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parent">Parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference">DataCloudflareOrganizationFilterParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containingInput">ContainingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.nameInput">NameInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageTokenInput">PageTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parentInput">ParentInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageToken">PageToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Containing`<sup>Required</sup> <a name="Containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containing"></a>

```csharp
public DataCloudflareOrganizationFilterContainingOutputReference Containing { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference">DataCloudflareOrganizationFilterContainingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.name"></a>

```csharp
public DataCloudflareOrganizationFilterNameOutputReference Name { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference">DataCloudflareOrganizationFilterNameOutputReference</a>

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parent"></a>

```csharp
public DataCloudflareOrganizationFilterParentOutputReference Parent { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference">DataCloudflareOrganizationFilterParentOutputReference</a>

---

##### `ContainingInput`<sup>Optional</sup> <a name="ContainingInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containingInput"></a>

```csharp
public IResolvable|DataCloudflareOrganizationFilterContaining ContainingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.nameInput"></a>

```csharp
public IResolvable|DataCloudflareOrganizationFilterName NameInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `PageTokenInput`<sup>Optional</sup> <a name="PageTokenInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageTokenInput"></a>

```csharp
public string PageTokenInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parentInput"></a>

```csharp
public IResolvable|DataCloudflareOrganizationFilterParent ParentInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

##### `PageToken`<sup>Required</sup> <a name="PageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageToken"></a>

```csharp
public string PageToken { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareOrganizationFilter InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

---


### DataCloudflareOrganizationFilterParentOutputReference <a name="DataCloudflareOrganizationFilterParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationFilterParentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareOrganizationFilterParent InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

---


### DataCloudflareOrganizationMetaFlagsOutputReference <a name="DataCloudflareOrganizationMetaFlagsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationMetaFlagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountCreation">AccountCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountDeletion">AccountDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMigration">AccountMigration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMobility">AccountMobility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.subOrgCreation">SubOrgCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags">DataCloudflareOrganizationMetaFlags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountCreation`<sup>Required</sup> <a name="AccountCreation" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountCreation"></a>

```csharp
public string AccountCreation { get; }
```

- *Type:* string

---

##### `AccountDeletion`<sup>Required</sup> <a name="AccountDeletion" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountDeletion"></a>

```csharp
public string AccountDeletion { get; }
```

- *Type:* string

---

##### `AccountMigration`<sup>Required</sup> <a name="AccountMigration" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMigration"></a>

```csharp
public string AccountMigration { get; }
```

- *Type:* string

---

##### `AccountMobility`<sup>Required</sup> <a name="AccountMobility" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMobility"></a>

```csharp
public string AccountMobility { get; }
```

- *Type:* string

---

##### `SubOrgCreation`<sup>Required</sup> <a name="SubOrgCreation" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.subOrgCreation"></a>

```csharp
public string SubOrgCreation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareOrganizationMetaFlags InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags">DataCloudflareOrganizationMetaFlags</a>

---


### DataCloudflareOrganizationMetaOutputReference <a name="DataCloudflareOrganizationMetaOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.flags">Flags</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference">DataCloudflareOrganizationMetaFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.managedBy">ManagedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta">DataCloudflareOrganizationMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.flags"></a>

```csharp
public DataCloudflareOrganizationMetaFlagsOutputReference Flags { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference">DataCloudflareOrganizationMetaFlagsOutputReference</a>

---

##### `ManagedBy`<sup>Required</sup> <a name="ManagedBy" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.managedBy"></a>

```csharp
public string ManagedBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareOrganizationMeta InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta">DataCloudflareOrganizationMeta</a>

---


### DataCloudflareOrganizationParentOutputReference <a name="DataCloudflareOrganizationParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationParentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent">DataCloudflareOrganizationParent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareOrganizationParent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent">DataCloudflareOrganizationParent</a>

---


### DataCloudflareOrganizationProfileOutputReference <a name="DataCloudflareOrganizationProfileOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareOrganizationProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessAddress">BusinessAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessEmail">BusinessEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessName">BusinessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessPhone">BusinessPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.externalMetadata">ExternalMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile">DataCloudflareOrganizationProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BusinessAddress`<sup>Required</sup> <a name="BusinessAddress" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessAddress"></a>

```csharp
public string BusinessAddress { get; }
```

- *Type:* string

---

##### `BusinessEmail`<sup>Required</sup> <a name="BusinessEmail" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessEmail"></a>

```csharp
public string BusinessEmail { get; }
```

- *Type:* string

---

##### `BusinessName`<sup>Required</sup> <a name="BusinessName" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessName"></a>

```csharp
public string BusinessName { get; }
```

- *Type:* string

---

##### `BusinessPhone`<sup>Required</sup> <a name="BusinessPhone" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessPhone"></a>

```csharp
public string BusinessPhone { get; }
```

- *Type:* string

---

##### `ExternalMetadata`<sup>Required</sup> <a name="ExternalMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.externalMetadata"></a>

```csharp
public string ExternalMetadata { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareOrganizationProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile">DataCloudflareOrganizationProfile</a>

---



