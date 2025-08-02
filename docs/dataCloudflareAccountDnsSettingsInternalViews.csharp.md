# `dataCloudflareAccountDnsSettingsInternalViews` Submodule <a name="`dataCloudflareAccountDnsSettingsInternalViews` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountDnsSettingsInternalViews <a name="DataCloudflareAccountDnsSettingsInternalViews" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views cloudflare_account_dns_settings_internal_views}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccountDnsSettingsInternalViews(Construct Scope, string Id, DataCloudflareAccountDnsSettingsInternalViewsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig">DataCloudflareAccountDnsSettingsInternalViewsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig">DataCloudflareAccountDnsSettingsInternalViewsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.putName">PutName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneId">ResetZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneName">ResetZoneName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutName` <a name="PutName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.putName"></a>

```csharp
private void PutName(DataCloudflareAccountDnsSettingsInternalViewsName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a>

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

##### `ResetZoneName` <a name="ResetZoneName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneName"></a>

```csharp
private void ResetZoneName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareAccountDnsSettingsInternalViews.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareAccountDnsSettingsInternalViews.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareAccountDnsSettingsInternalViews.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareAccountDnsSettingsInternalViews.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAccountDnsSettingsInternalViews to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAccountDnsSettingsInternalViews that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountDnsSettingsInternalViews to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference">DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList">DataCloudflareAccountDnsSettingsInternalViewsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.matchInput">MatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.nameInput">NameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneNameInput">ZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.match">Match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneName">ZoneName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.name"></a>

```csharp
public DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference Name { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference">DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.result"></a>

```csharp
public DataCloudflareAccountDnsSettingsInternalViewsResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList">DataCloudflareAccountDnsSettingsInternalViewsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.matchInput"></a>

```csharp
public string MatchInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.nameInput"></a>

```csharp
public object NameInput { get; }
```

- *Type:* object

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneNameInput"></a>

```csharp
public string ZoneNameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.match"></a>

```csharp
public string Match { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneName"></a>

```csharp
public string ZoneName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountDnsSettingsInternalViewsConfig <a name="DataCloudflareAccountDnsSettingsInternalViewsConfig" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccountDnsSettingsInternalViewsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Direction = null,
    string Match = null,
    double MaxItems = null,
    DataCloudflareAccountDnsSettingsInternalViewsName Name = null,
    string Order = null,
    string ZoneId = null,
    string ZoneName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.direction">Direction</a></code> | <code>string</code> | Direction to order DNS views in. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.match">Match</a></code> | <code>string</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#name DataCloudflareAccountDnsSettingsInternalViews#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.order">Order</a></code> | <code>string</code> | Field to order DNS views by. Available values: "name", "created_on", "modified_on". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | A zone ID that exists in the zones list for the view. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneName">ZoneName</a></code> | <code>string</code> | A zone name that exists in the zones list for the view. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#account_id DataCloudflareAccountDnsSettingsInternalViews#account_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Direction to order DNS views in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#direction DataCloudflareAccountDnsSettingsInternalViews#direction}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.match"></a>

```csharp
public string Match { get; set; }
```

- *Type:* string

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#match DataCloudflareAccountDnsSettingsInternalViews#match}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#max_items DataCloudflareAccountDnsSettingsInternalViews#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.name"></a>

```csharp
public DataCloudflareAccountDnsSettingsInternalViewsName Name { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#name DataCloudflareAccountDnsSettingsInternalViews#name}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to order DNS views by. Available values: "name", "created_on", "modified_on".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#order DataCloudflareAccountDnsSettingsInternalViews#order}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

A zone ID that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#zone_id DataCloudflareAccountDnsSettingsInternalViews#zone_id}

---

##### `ZoneName`<sup>Optional</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneName"></a>

```csharp
public string ZoneName { get; set; }
```

- *Type:* string

A zone name that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#zone_name DataCloudflareAccountDnsSettingsInternalViews#zone_name}

---

### DataCloudflareAccountDnsSettingsInternalViewsName <a name="DataCloudflareAccountDnsSettingsInternalViewsName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccountDnsSettingsInternalViewsName {
    string Contains = null,
    string Endswith = null,
    string Exact = null,
    string Startswith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.contains">Contains</a></code> | <code>string</code> | Substring of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.endswith">Endswith</a></code> | <code>string</code> | Suffix of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.exact">Exact</a></code> | <code>string</code> | Exact value of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.startswith">Startswith</a></code> | <code>string</code> | Prefix of the DNS view name. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.contains"></a>

```csharp
public string Contains { get; set; }
```

- *Type:* string

Substring of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#contains DataCloudflareAccountDnsSettingsInternalViews#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.endswith"></a>

```csharp
public string Endswith { get; set; }
```

- *Type:* string

Suffix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#endswith DataCloudflareAccountDnsSettingsInternalViews#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Exact value of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#exact DataCloudflareAccountDnsSettingsInternalViews#exact}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.startswith"></a>

```csharp
public string Startswith { get; set; }
```

- *Type:* string

Prefix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/account_dns_settings_internal_views#startswith DataCloudflareAccountDnsSettingsInternalViews#startswith}

---

### DataCloudflareAccountDnsSettingsInternalViewsResult <a name="DataCloudflareAccountDnsSettingsInternalViewsResult" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccountDnsSettingsInternalViewsResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference <a name="DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetContains"></a>

```csharp
private void ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetEndswith"></a>

```csharp
private void ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetStartswith"></a>

```csharp
private void ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.containsInput">ContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswithInput">EndswithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswithInput">StartswithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.contains">Contains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswith">Endswith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswith">Startswith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.containsInput"></a>

```csharp
public string ContainsInput { get; }
```

- *Type:* string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswithInput"></a>

```csharp
public string EndswithInput { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswithInput"></a>

```csharp
public string StartswithInput { get; }
```

- *Type:* string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.contains"></a>

```csharp
public string Contains { get; }
```

- *Type:* string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswith"></a>

```csharp
public string Endswith { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswith"></a>

```csharp
public string Startswith { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataCloudflareAccountDnsSettingsInternalViewsResultList <a name="DataCloudflareAccountDnsSettingsInternalViewsResultList" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccountDnsSettingsInternalViewsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.get"></a>

```csharp
private DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference <a name="DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.modifiedTime">ModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult">DataCloudflareAccountDnsSettingsInternalViewsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedTime`<sup>Required</sup> <a name="ModifiedTime" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.modifiedTime"></a>

```csharp
public string ModifiedTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAccountDnsSettingsInternalViewsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult">DataCloudflareAccountDnsSettingsInternalViewsResult</a>

---



