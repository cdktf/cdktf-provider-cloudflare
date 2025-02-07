# `dataCloudflareApiTokenPermissionsGroupsList` Submodule <a name="`dataCloudflareApiTokenPermissionsGroupsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareApiTokenPermissionsGroupsList <a name="DataCloudflareApiTokenPermissionsGroupsList" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/api_token_permissions_groups_list cloudflare_api_token_permissions_groups_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiTokenPermissionsGroupsList(Construct Scope, string Id, DataCloudflareApiTokenPermissionsGroupsListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig">DataCloudflareApiTokenPermissionsGroupsListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig">DataCloudflareApiTokenPermissionsGroupsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareApiTokenPermissionsGroupsList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareApiTokenPermissionsGroupsList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareApiTokenPermissionsGroupsList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareApiTokenPermissionsGroupsList.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareApiTokenPermissionsGroupsList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareApiTokenPermissionsGroupsList resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareApiTokenPermissionsGroupsList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareApiTokenPermissionsGroupsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/api_token_permissions_groups_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareApiTokenPermissionsGroupsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList">DataCloudflareApiTokenPermissionsGroupsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.result"></a>

```csharp
public DataCloudflareApiTokenPermissionsGroupsListResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList">DataCloudflareApiTokenPermissionsGroupsListResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareApiTokenPermissionsGroupsListConfig <a name="DataCloudflareApiTokenPermissionsGroupsListConfig" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiTokenPermissionsGroupsListConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    double MaxItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.accountId">AccountId</a></code> | <code>string</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/api_token_permissions_groups_list#account_id DataCloudflareApiTokenPermissionsGroupsList#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/api_token_permissions_groups_list#max_items DataCloudflareApiTokenPermissionsGroupsList#max_items}

---

### DataCloudflareApiTokenPermissionsGroupsListResult <a name="DataCloudflareApiTokenPermissionsGroupsListResult" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiTokenPermissionsGroupsListResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareApiTokenPermissionsGroupsListResultList <a name="DataCloudflareApiTokenPermissionsGroupsListResultList" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiTokenPermissionsGroupsListResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.get"></a>

```csharp
private DataCloudflareApiTokenPermissionsGroupsListResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareApiTokenPermissionsGroupsListResultOutputReference <a name="DataCloudflareApiTokenPermissionsGroupsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiTokenPermissionsGroupsListResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResult">DataCloudflareApiTokenPermissionsGroupsListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareApiTokenPermissionsGroupsListResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResult">DataCloudflareApiTokenPermissionsGroupsListResult</a>

---



