# `dataCloudflarePageShieldCookiesList` Submodule <a name="`dataCloudflarePageShieldCookiesList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldCookiesList <a name="DataCloudflarePageShieldCookiesList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePageShieldCookiesList(Construct Scope, string Id, DataCloudflarePageShieldCookiesListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig">DataCloudflarePageShieldCookiesListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig">DataCloudflarePageShieldCookiesListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetExport">ResetExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHttpOnly">ResetHttpOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPage">ResetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPageUrl">ResetPageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPerPage">ResetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSameSite">ResetSameSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSecure">ResetSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetExport` <a name="ResetExport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetExport"></a>

```csharp
private void ResetExport()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHosts"></a>

```csharp
private void ResetHosts()
```

##### `ResetHttpOnly` <a name="ResetHttpOnly" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetHttpOnly"></a>

```csharp
private void ResetHttpOnly()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetOrderBy"></a>

```csharp
private void ResetOrderBy()
```

##### `ResetPage` <a name="ResetPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPage"></a>

```csharp
private void ResetPage()
```

##### `ResetPageUrl` <a name="ResetPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPageUrl"></a>

```csharp
private void ResetPageUrl()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPerPage` <a name="ResetPerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetPerPage"></a>

```csharp
private void ResetPerPage()
```

##### `ResetSameSite` <a name="ResetSameSite" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSameSite"></a>

```csharp
private void ResetSameSite()
```

##### `ResetSecure` <a name="ResetSecure" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetSecure"></a>

```csharp
private void ResetSecure()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePageShieldCookiesList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePageShieldCookiesList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePageShieldCookiesList.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePageShieldCookiesList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePageShieldCookiesList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePageShieldCookiesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldCookiesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList">DataCloudflarePageShieldCookiesListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.exportInput">ExportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hostsInput">HostsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnlyInput">HttpOnlyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderByInput">OrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageInput">PageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrlInput">PageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPageInput">PerPageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSiteInput">SameSiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secureInput">SecureInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.export">Export</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hosts">Hosts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnly">HttpOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderBy">OrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.page">Page</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrl">PageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPage">PerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSite">SameSite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secure">Secure</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.result"></a>

```csharp
public DataCloudflarePageShieldCookiesListResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList">DataCloudflarePageShieldCookiesListResultList</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.exportInput"></a>

```csharp
public string ExportInput { get; }
```

- *Type:* string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hostsInput"></a>

```csharp
public string HostsInput { get; }
```

- *Type:* string

---

##### `HttpOnlyInput`<sup>Optional</sup> <a name="HttpOnlyInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnlyInput"></a>

```csharp
public bool|IResolvable HttpOnlyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderByInput"></a>

```csharp
public string OrderByInput { get; }
```

- *Type:* string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageInput"></a>

```csharp
public string PageInput { get; }
```

- *Type:* string

---

##### `PageUrlInput`<sup>Optional</sup> <a name="PageUrlInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrlInput"></a>

```csharp
public string PageUrlInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PerPageInput`<sup>Optional</sup> <a name="PerPageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPageInput"></a>

```csharp
public double PerPageInput { get; }
```

- *Type:* double

---

##### `SameSiteInput`<sup>Optional</sup> <a name="SameSiteInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSiteInput"></a>

```csharp
public string SameSiteInput { get; }
```

- *Type:* string

---

##### `SecureInput`<sup>Optional</sup> <a name="SecureInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secureInput"></a>

```csharp
public bool|IResolvable SecureInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.export"></a>

```csharp
public string Export { get; }
```

- *Type:* string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.hosts"></a>

```csharp
public string Hosts { get; }
```

- *Type:* string

---

##### `HttpOnly`<sup>Required</sup> <a name="HttpOnly" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.httpOnly"></a>

```csharp
public bool|IResolvable HttpOnly { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.orderBy"></a>

```csharp
public string OrderBy { get; }
```

- *Type:* string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.page"></a>

```csharp
public string Page { get; }
```

- *Type:* string

---

##### `PageUrl`<sup>Required</sup> <a name="PageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.pageUrl"></a>

```csharp
public string PageUrl { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.perPage"></a>

```csharp
public double PerPage { get; }
```

- *Type:* double

---

##### `SameSite`<sup>Required</sup> <a name="SameSite" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.sameSite"></a>

```csharp
public string SameSite { get; }
```

- *Type:* string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.secure"></a>

```csharp
public bool|IResolvable Secure { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldCookiesListConfig <a name="DataCloudflarePageShieldCookiesListConfig" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePageShieldCookiesListConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ZoneId,
    string Direction = null,
    string Domain = null,
    string Export = null,
    string Hosts = null,
    bool|IResolvable HttpOnly = null,
    double MaxItems = null,
    string Name = null,
    string OrderBy = null,
    string Page = null,
    string PageUrl = null,
    string Path = null,
    double PerPage = null,
    string SameSite = null,
    bool|IResolvable Secure = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.direction">Direction</a></code> | <code>string</code> | The direction used to sort returned cookies.' Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.domain">Domain</a></code> | <code>string</code> | Filters the returned cookies that match the specified domain attribute. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.export">Export</a></code> | <code>string</code> | Export the list of cookies as a file, limited to 50000 entries. Available values: "csv". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.hosts">Hosts</a></code> | <code>string</code> | Includes cookies that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.httpOnly">HttpOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Filters the returned cookies that are set with HttpOnly. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.name">Name</a></code> | <code>string</code> | Filters the returned cookies that match the specified name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.orderBy">OrderBy</a></code> | <code>string</code> | The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.page">Page</a></code> | <code>string</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.pageUrl">PageUrl</a></code> | <code>string</code> | Includes connections that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.path">Path</a></code> | <code>string</code> | Filters the returned cookies that match the specified path attribute. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.perPage">PerPage</a></code> | <code>double</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.sameSite">SameSite</a></code> | <code>string</code> | Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.secure">Secure</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Filters the returned cookies that are set with Secure. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.type">Type</a></code> | <code>string</code> | Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#zone_id DataCloudflarePageShieldCookiesList#zone_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The direction used to sort returned cookies.' Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#direction DataCloudflarePageShieldCookiesList#direction}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Filters the returned cookies that match the specified domain attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#domain DataCloudflarePageShieldCookiesList#domain}

---

##### `Export`<sup>Optional</sup> <a name="Export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.export"></a>

```csharp
public string Export { get; set; }
```

- *Type:* string

Export the list of cookies as a file, limited to 50000 entries. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#export DataCloudflarePageShieldCookiesList#export}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.hosts"></a>

```csharp
public string Hosts { get; set; }
```

- *Type:* string

Includes cookies that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#hosts DataCloudflarePageShieldCookiesList#hosts}

---

##### `HttpOnly`<sup>Optional</sup> <a name="HttpOnly" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.httpOnly"></a>

```csharp
public bool|IResolvable HttpOnly { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Filters the returned cookies that are set with HttpOnly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#http_only DataCloudflarePageShieldCookiesList#http_only}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#max_items DataCloudflarePageShieldCookiesList#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Filters the returned cookies that match the specified name.

Wildcards are supported at the start and end to support starts with, ends with
and contains. e.g. session*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#name DataCloudflarePageShieldCookiesList#name}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.orderBy"></a>

```csharp
public string OrderBy { get; set; }
```

- *Type:* string

The field used to sort returned cookies. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#order_by DataCloudflarePageShieldCookiesList#order_by}

---

##### `Page`<sup>Optional</sup> <a name="Page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.page"></a>

```csharp
public string Page { get; set; }
```

- *Type:* string

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the cookies
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of cookies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#page DataCloudflarePageShieldCookiesList#page}

---

##### `PageUrl`<sup>Optional</sup> <a name="PageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.pageUrl"></a>

```csharp
public string PageUrl { get; set; }
```

- *Type:* string

Includes connections that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#page_url DataCloudflarePageShieldCookiesList#page_url}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Filters the returned cookies that match the specified path attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#path DataCloudflarePageShieldCookiesList#path}

---

##### `PerPage`<sup>Optional</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.perPage"></a>

```csharp
public double PerPage { get; set; }
```

- *Type:* double

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#per_page DataCloudflarePageShieldCookiesList#per_page}

---

##### `SameSite`<sup>Optional</sup> <a name="SameSite" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.sameSite"></a>

```csharp
public string SameSite { get; set; }
```

- *Type:* string

Filters the returned cookies that match the specified same_site attribute Available values: "lax", "strict", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#same_site DataCloudflarePageShieldCookiesList#same_site}

---

##### `Secure`<sup>Optional</sup> <a name="Secure" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.secure"></a>

```csharp
public bool|IResolvable Secure { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Filters the returned cookies that are set with Secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#secure DataCloudflarePageShieldCookiesList#secure}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Filters the returned cookies that match the specified type attribute Available values: "first_party", "unknown".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/page_shield_cookies_list#type DataCloudflarePageShieldCookiesList#type}

---

### DataCloudflarePageShieldCookiesListResult <a name="DataCloudflarePageShieldCookiesListResult" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePageShieldCookiesListResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldCookiesListResultList <a name="DataCloudflarePageShieldCookiesListResultList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePageShieldCookiesListResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get"></a>

```csharp
private DataCloudflarePageShieldCookiesListResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflarePageShieldCookiesListResultOutputReference <a name="DataCloudflarePageShieldCookiesListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePageShieldCookiesListResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.domainAttribute">DomainAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.expiresAttribute">ExpiresAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.firstSeenAt">FirstSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.httpOnlyAttribute">HttpOnlyAttribute</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.lastSeenAt">LastSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.maxAgeAttribute">MaxAgeAttribute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pageUrls">PageUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pathAttribute">PathAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.sameSiteAttribute">SameSiteAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.secureAttribute">SecureAttribute</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult">DataCloudflarePageShieldCookiesListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainAttribute`<sup>Required</sup> <a name="DomainAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.domainAttribute"></a>

```csharp
public string DomainAttribute { get; }
```

- *Type:* string

---

##### `ExpiresAttribute`<sup>Required</sup> <a name="ExpiresAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.expiresAttribute"></a>

```csharp
public string ExpiresAttribute { get; }
```

- *Type:* string

---

##### `FirstSeenAt`<sup>Required</sup> <a name="FirstSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.firstSeenAt"></a>

```csharp
public string FirstSeenAt { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `HttpOnlyAttribute`<sup>Required</sup> <a name="HttpOnlyAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.httpOnlyAttribute"></a>

```csharp
public IResolvable HttpOnlyAttribute { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastSeenAt`<sup>Required</sup> <a name="LastSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.lastSeenAt"></a>

```csharp
public string LastSeenAt { get; }
```

- *Type:* string

---

##### `MaxAgeAttribute`<sup>Required</sup> <a name="MaxAgeAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.maxAgeAttribute"></a>

```csharp
public double MaxAgeAttribute { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PageUrls`<sup>Required</sup> <a name="PageUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pageUrls"></a>

```csharp
public string[] PageUrls { get; }
```

- *Type:* string[]

---

##### `PathAttribute`<sup>Required</sup> <a name="PathAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.pathAttribute"></a>

```csharp
public string PathAttribute { get; }
```

- *Type:* string

---

##### `SameSiteAttribute`<sup>Required</sup> <a name="SameSiteAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.sameSiteAttribute"></a>

```csharp
public string SameSiteAttribute { get; }
```

- *Type:* string

---

##### `SecureAttribute`<sup>Required</sup> <a name="SecureAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.secureAttribute"></a>

```csharp
public IResolvable SecureAttribute { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePageShieldCookiesListResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldCookiesList.DataCloudflarePageShieldCookiesListResult">DataCloudflarePageShieldCookiesListResult</a>

---



