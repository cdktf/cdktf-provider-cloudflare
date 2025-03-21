# `dataCloudflarePageShieldConnectionsList` Submodule <a name="`dataCloudflarePageShieldConnectionsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldConnectionsList <a name="DataCloudflarePageShieldConnectionsList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list cloudflare_page_shield_connections_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePageShieldConnectionsList(Construct Scope, string Id, DataCloudflarePageShieldConnectionsListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig">DataCloudflarePageShieldConnectionsListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig">DataCloudflarePageShieldConnectionsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeCdnCgi">ResetExcludeCdnCgi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeUrls">ResetExcludeUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExport">ResetExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPage">ResetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPageUrl">ResetPageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPerPage">ResetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPrioritizeMalicious">ResetPrioritizeMalicious</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetUrls">ResetUrls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetExcludeCdnCgi` <a name="ResetExcludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeCdnCgi"></a>

```csharp
private void ResetExcludeCdnCgi()
```

##### `ResetExcludeUrls` <a name="ResetExcludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeUrls"></a>

```csharp
private void ResetExcludeUrls()
```

##### `ResetExport` <a name="ResetExport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExport"></a>

```csharp
private void ResetExport()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetHosts"></a>

```csharp
private void ResetHosts()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOrderBy"></a>

```csharp
private void ResetOrderBy()
```

##### `ResetPage` <a name="ResetPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPage"></a>

```csharp
private void ResetPage()
```

##### `ResetPageUrl` <a name="ResetPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPageUrl"></a>

```csharp
private void ResetPageUrl()
```

##### `ResetPerPage` <a name="ResetPerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPerPage"></a>

```csharp
private void ResetPerPage()
```

##### `ResetPrioritizeMalicious` <a name="ResetPrioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPrioritizeMalicious"></a>

```csharp
private void ResetPrioritizeMalicious()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUrls` <a name="ResetUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetUrls"></a>

```csharp
private void ResetUrls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflarePageShieldConnectionsList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePageShieldConnectionsList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePageShieldConnectionsList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePageShieldConnectionsList.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePageShieldConnectionsList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflarePageShieldConnectionsList resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePageShieldConnectionsList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePageShieldConnectionsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldConnectionsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList">DataCloudflarePageShieldConnectionsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgiInput">ExcludeCdnCgiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrlsInput">ExcludeUrlsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.exportInput">ExportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hostsInput">HostsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderByInput">OrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageInput">PageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrlInput">PageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPageInput">PerPageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMaliciousInput">PrioritizeMaliciousInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urlsInput">UrlsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgi">ExcludeCdnCgi</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrls">ExcludeUrls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.export">Export</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hosts">Hosts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderBy">OrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.page">Page</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrl">PageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPage">PerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMalicious">PrioritizeMalicious</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urls">Urls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.result"></a>

```csharp
public DataCloudflarePageShieldConnectionsListResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList">DataCloudflarePageShieldConnectionsListResultList</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `ExcludeCdnCgiInput`<sup>Optional</sup> <a name="ExcludeCdnCgiInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgiInput"></a>

```csharp
public object ExcludeCdnCgiInput { get; }
```

- *Type:* object

---

##### `ExcludeUrlsInput`<sup>Optional</sup> <a name="ExcludeUrlsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrlsInput"></a>

```csharp
public string ExcludeUrlsInput { get; }
```

- *Type:* string

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.exportInput"></a>

```csharp
public string ExportInput { get; }
```

- *Type:* string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hostsInput"></a>

```csharp
public string HostsInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderByInput"></a>

```csharp
public string OrderByInput { get; }
```

- *Type:* string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageInput"></a>

```csharp
public string PageInput { get; }
```

- *Type:* string

---

##### `PageUrlInput`<sup>Optional</sup> <a name="PageUrlInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrlInput"></a>

```csharp
public string PageUrlInput { get; }
```

- *Type:* string

---

##### `PerPageInput`<sup>Optional</sup> <a name="PerPageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPageInput"></a>

```csharp
public double PerPageInput { get; }
```

- *Type:* double

---

##### `PrioritizeMaliciousInput`<sup>Optional</sup> <a name="PrioritizeMaliciousInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMaliciousInput"></a>

```csharp
public object PrioritizeMaliciousInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urlsInput"></a>

```csharp
public string UrlsInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `ExcludeCdnCgi`<sup>Required</sup> <a name="ExcludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgi"></a>

```csharp
public object ExcludeCdnCgi { get; }
```

- *Type:* object

---

##### `ExcludeUrls`<sup>Required</sup> <a name="ExcludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrls"></a>

```csharp
public string ExcludeUrls { get; }
```

- *Type:* string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.export"></a>

```csharp
public string Export { get; }
```

- *Type:* string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hosts"></a>

```csharp
public string Hosts { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderBy"></a>

```csharp
public string OrderBy { get; }
```

- *Type:* string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.page"></a>

```csharp
public string Page { get; }
```

- *Type:* string

---

##### `PageUrl`<sup>Required</sup> <a name="PageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrl"></a>

```csharp
public string PageUrl { get; }
```

- *Type:* string

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPage"></a>

```csharp
public double PerPage { get; }
```

- *Type:* double

---

##### `PrioritizeMalicious`<sup>Required</sup> <a name="PrioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMalicious"></a>

```csharp
public object PrioritizeMalicious { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urls"></a>

```csharp
public string Urls { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldConnectionsListConfig <a name="DataCloudflarePageShieldConnectionsListConfig" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePageShieldConnectionsListConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId,
    string Direction = null,
    object ExcludeCdnCgi = null,
    string ExcludeUrls = null,
    string Export = null,
    string Hosts = null,
    double MaxItems = null,
    string OrderBy = null,
    string Page = null,
    string PageUrl = null,
    double PerPage = null,
    object PrioritizeMalicious = null,
    string Status = null,
    string Urls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.direction">Direction</a></code> | <code>string</code> | The direction used to sort returned connections. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeCdnCgi">ExcludeCdnCgi</a></code> | <code>object</code> | When true, excludes connections seen in a `/cdn-cgi` path from the returned connections. The default value is true. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeUrls">ExcludeUrls</a></code> | <code>string</code> | Excludes connections whose URL contains one of the URL-encoded URLs separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.export">Export</a></code> | <code>string</code> | Export the list of connections as a file. Available values: "csv". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.hosts">Hosts</a></code> | <code>string</code> | Includes connections that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.orderBy">OrderBy</a></code> | <code>string</code> | The field used to sort returned connections. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.page">Page</a></code> | <code>string</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.pageUrl">PageUrl</a></code> | <code>string</code> | Includes connections that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.perPage">PerPage</a></code> | <code>double</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.prioritizeMalicious">PrioritizeMalicious</a></code> | <code>object</code> | When true, malicious connections appear first in the returned connections. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.status">Status</a></code> | <code>string</code> | Filters the returned connections using a comma-separated list of connection statuses. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.urls">Urls</a></code> | <code>string</code> | Includes connections whose URL contain one or more URL-encoded URLs separated by commas. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#zone_id DataCloudflarePageShieldConnectionsList#zone_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The direction used to sort returned connections. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#direction DataCloudflarePageShieldConnectionsList#direction}

---

##### `ExcludeCdnCgi`<sup>Optional</sup> <a name="ExcludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeCdnCgi"></a>

```csharp
public object ExcludeCdnCgi { get; set; }
```

- *Type:* object

When true, excludes connections seen in a `/cdn-cgi` path from the returned connections. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#exclude_cdn_cgi DataCloudflarePageShieldConnectionsList#exclude_cdn_cgi}

---

##### `ExcludeUrls`<sup>Optional</sup> <a name="ExcludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeUrls"></a>

```csharp
public string ExcludeUrls { get; set; }
```

- *Type:* string

Excludes connections whose URL contains one of the URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#exclude_urls DataCloudflarePageShieldConnectionsList#exclude_urls}

---

##### `Export`<sup>Optional</sup> <a name="Export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.export"></a>

```csharp
public string Export { get; set; }
```

- *Type:* string

Export the list of connections as a file. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#export DataCloudflarePageShieldConnectionsList#export}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.hosts"></a>

```csharp
public string Hosts { get; set; }
```

- *Type:* string

Includes connections that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#hosts DataCloudflarePageShieldConnectionsList#hosts}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#max_items DataCloudflarePageShieldConnectionsList#max_items}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.orderBy"></a>

```csharp
public string OrderBy { get; set; }
```

- *Type:* string

The field used to sort returned connections. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#order_by DataCloudflarePageShieldConnectionsList#order_by}

---

##### `Page`<sup>Optional</sup> <a name="Page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.page"></a>

```csharp
public string Page { get; set; }
```

- *Type:* string

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the connections
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of connections

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#page DataCloudflarePageShieldConnectionsList#page}

---

##### `PageUrl`<sup>Optional</sup> <a name="PageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.pageUrl"></a>

```csharp
public string PageUrl { get; set; }
```

- *Type:* string

Includes connections that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#page_url DataCloudflarePageShieldConnectionsList#page_url}

---

##### `PerPage`<sup>Optional</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.perPage"></a>

```csharp
public double PerPage { get; set; }
```

- *Type:* double

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#per_page DataCloudflarePageShieldConnectionsList#per_page}

---

##### `PrioritizeMalicious`<sup>Optional</sup> <a name="PrioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.prioritizeMalicious"></a>

```csharp
public object PrioritizeMalicious { get; set; }
```

- *Type:* object

When true, malicious connections appear first in the returned connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#prioritize_malicious DataCloudflarePageShieldConnectionsList#prioritize_malicious}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Filters the returned connections using a comma-separated list of connection statuses.

Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#status DataCloudflarePageShieldConnectionsList#status}

---

##### `Urls`<sup>Optional</sup> <a name="Urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.urls"></a>

```csharp
public string Urls { get; set; }
```

- *Type:* string

Includes connections whose URL contain one or more URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/page_shield_connections_list#urls DataCloudflarePageShieldConnectionsList#urls}

---

### DataCloudflarePageShieldConnectionsListResult <a name="DataCloudflarePageShieldConnectionsListResult" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePageShieldConnectionsListResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldConnectionsListResultList <a name="DataCloudflarePageShieldConnectionsListResultList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePageShieldConnectionsListResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.get"></a>

```csharp
private DataCloudflarePageShieldConnectionsListResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflarePageShieldConnectionsListResultOutputReference <a name="DataCloudflarePageShieldConnectionsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePageShieldConnectionsListResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.addedAt">AddedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.domainReportedMalicious">DomainReportedMalicious</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstPageUrl">FirstPageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstSeenAt">FirstSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.lastSeenAt">LastSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousDomainCategories">MaliciousDomainCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousUrlCategories">MaliciousUrlCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.pageUrls">PageUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlContainsCdnCgiPath">UrlContainsCdnCgiPath</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlReportedMalicious">UrlReportedMalicious</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult">DataCloudflarePageShieldConnectionsListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.addedAt"></a>

```csharp
public string AddedAt { get; }
```

- *Type:* string

---

##### `DomainReportedMalicious`<sup>Required</sup> <a name="DomainReportedMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.domainReportedMalicious"></a>

```csharp
public IResolvable DomainReportedMalicious { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FirstPageUrl`<sup>Required</sup> <a name="FirstPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstPageUrl"></a>

```csharp
public string FirstPageUrl { get; }
```

- *Type:* string

---

##### `FirstSeenAt`<sup>Required</sup> <a name="FirstSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstSeenAt"></a>

```csharp
public string FirstSeenAt { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastSeenAt`<sup>Required</sup> <a name="LastSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.lastSeenAt"></a>

```csharp
public string LastSeenAt { get; }
```

- *Type:* string

---

##### `MaliciousDomainCategories`<sup>Required</sup> <a name="MaliciousDomainCategories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousDomainCategories"></a>

```csharp
public string[] MaliciousDomainCategories { get; }
```

- *Type:* string[]

---

##### `MaliciousUrlCategories`<sup>Required</sup> <a name="MaliciousUrlCategories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousUrlCategories"></a>

```csharp
public string[] MaliciousUrlCategories { get; }
```

- *Type:* string[]

---

##### `PageUrls`<sup>Required</sup> <a name="PageUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.pageUrls"></a>

```csharp
public string[] PageUrls { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UrlContainsCdnCgiPath`<sup>Required</sup> <a name="UrlContainsCdnCgiPath" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlContainsCdnCgiPath"></a>

```csharp
public IResolvable UrlContainsCdnCgiPath { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `UrlReportedMalicious`<sup>Required</sup> <a name="UrlReportedMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlReportedMalicious"></a>

```csharp
public IResolvable UrlReportedMalicious { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePageShieldConnectionsListResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult">DataCloudflarePageShieldConnectionsListResult</a>

---



