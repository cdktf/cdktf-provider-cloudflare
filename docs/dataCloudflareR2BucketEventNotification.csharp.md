# `dataCloudflareR2BucketEventNotification` Submodule <a name="`dataCloudflareR2BucketEventNotification` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareR2BucketEventNotification <a name="DataCloudflareR2BucketEventNotification" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotification(Construct Scope, string Id, DataCloudflareR2BucketEventNotificationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig">DataCloudflareR2BucketEventNotificationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig">DataCloudflareR2BucketEventNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareR2BucketEventNotification resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareR2BucketEventNotification.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareR2BucketEventNotification.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareR2BucketEventNotification.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareR2BucketEventNotification.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareR2BucketEventNotification resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareR2BucketEventNotification to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareR2BucketEventNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/r2_bucket_event_notification#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareR2BucketEventNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.abortMultipartUploadsTransition">AbortMultipartUploadsTransition</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference">DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference">DataCloudflareR2BucketEventNotificationConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.deleteObjectsTransition">DeleteObjectsTransition</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference">DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.storageClassTransitions">StorageClassTransitions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList">DataCloudflareR2BucketEventNotificationStorageClassTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.queueIdInput">QueueIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.queueId">QueueId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AbortMultipartUploadsTransition`<sup>Required</sup> <a name="AbortMultipartUploadsTransition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.abortMultipartUploadsTransition"></a>

```csharp
public DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference AbortMultipartUploadsTransition { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference">DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.conditions"></a>

```csharp
public DataCloudflareR2BucketEventNotificationConditionsOutputReference Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference">DataCloudflareR2BucketEventNotificationConditionsOutputReference</a>

---

##### `DeleteObjectsTransition`<sup>Required</sup> <a name="DeleteObjectsTransition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.deleteObjectsTransition"></a>

```csharp
public DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference DeleteObjectsTransition { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference">DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StorageClassTransitions`<sup>Required</sup> <a name="StorageClassTransitions" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.storageClassTransitions"></a>

```csharp
public DataCloudflareR2BucketEventNotificationStorageClassTransitionsList StorageClassTransitions { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList">DataCloudflareR2BucketEventNotificationStorageClassTransitionsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `QueueIdInput`<sup>Optional</sup> <a name="QueueIdInput" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.queueIdInput"></a>

```csharp
public string QueueIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.queueId"></a>

```csharp
public string QueueId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransition <a name="DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransition {

};
```


### DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionCondition <a name="DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionCondition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionCondition {

};
```


### DataCloudflareR2BucketEventNotificationConditions <a name="DataCloudflareR2BucketEventNotificationConditions" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationConditions {

};
```


### DataCloudflareR2BucketEventNotificationConfig <a name="DataCloudflareR2BucketEventNotificationConfig" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string BucketName,
    string QueueId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.accountId">AccountId</a></code> | <code>string</code> | Account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.bucketName">BucketName</a></code> | <code>string</code> | Name of the bucket. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.queueId">QueueId</a></code> | <code>string</code> | Queue ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/r2_bucket_event_notification#account_id DataCloudflareR2BucketEventNotification#account_id}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/r2_bucket_event_notification#bucket_name DataCloudflareR2BucketEventNotification#bucket_name}

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.queueId"></a>

```csharp
public string QueueId { get; set; }
```

- *Type:* string

Queue ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/r2_bucket_event_notification#queue_id DataCloudflareR2BucketEventNotification#queue_id}

---

### DataCloudflareR2BucketEventNotificationDeleteObjectsTransition <a name="DataCloudflareR2BucketEventNotificationDeleteObjectsTransition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationDeleteObjectsTransition {

};
```


### DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionCondition <a name="DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionCondition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionCondition {

};
```


### DataCloudflareR2BucketEventNotificationStorageClassTransitions <a name="DataCloudflareR2BucketEventNotificationStorageClassTransitions" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationStorageClassTransitions {

};
```


### DataCloudflareR2BucketEventNotificationStorageClassTransitionsCondition <a name="DataCloudflareR2BucketEventNotificationStorageClassTransitionsCondition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationStorageClassTransitionsCondition {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference <a name="DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionCondition">DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionCondition">DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionCondition</a>

---


### DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference <a name="DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference">DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransition">DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.property.condition"></a>

```csharp
public DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference">DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionConditionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransitionOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransition">DataCloudflareR2BucketEventNotificationAbortMultipartUploadsTransition</a>

---


### DataCloudflareR2BucketEventNotificationConditionsOutputReference <a name="DataCloudflareR2BucketEventNotificationConditionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditions">DataCloudflareR2BucketEventNotificationConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditionsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareR2BucketEventNotificationConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConditions">DataCloudflareR2BucketEventNotificationConditions</a>

---


### DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference <a name="DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.date">Date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionCondition">DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.date"></a>

```csharp
public string Date { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionCondition">DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionCondition</a>

---


### DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference <a name="DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference">DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransition">DataCloudflareR2BucketEventNotificationDeleteObjectsTransition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.property.condition"></a>

```csharp
public DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference">DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionConditionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransitionOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareR2BucketEventNotificationDeleteObjectsTransition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationDeleteObjectsTransition">DataCloudflareR2BucketEventNotificationDeleteObjectsTransition</a>

---


### DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference <a name="DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.date">Date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsCondition">DataCloudflareR2BucketEventNotificationStorageClassTransitionsCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.date"></a>

```csharp
public string Date { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareR2BucketEventNotificationStorageClassTransitionsCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsCondition">DataCloudflareR2BucketEventNotificationStorageClassTransitionsCondition</a>

---


### DataCloudflareR2BucketEventNotificationStorageClassTransitionsList <a name="DataCloudflareR2BucketEventNotificationStorageClassTransitionsList" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationStorageClassTransitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.get"></a>

```csharp
private DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference <a name="DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference">DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitions">DataCloudflareR2BucketEventNotificationStorageClassTransitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.property.condition"></a>

```csharp
public DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference">DataCloudflareR2BucketEventNotificationStorageClassTransitionsConditionOutputReference</a>

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitionsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareR2BucketEventNotificationStorageClassTransitions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationStorageClassTransitions">DataCloudflareR2BucketEventNotificationStorageClassTransitions</a>

---



