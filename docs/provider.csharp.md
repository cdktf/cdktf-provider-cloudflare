# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-cloudflare.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudflareProvider <a name="CloudflareProvider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs cloudflare}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CloudflareProvider(Construct Scope, string Id, CloudflareProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig">CloudflareProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig">CloudflareProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiBasePath">ResetApiBasePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiClientLogging">ResetApiClientLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiHostname">ResetApiHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiUserServiceKey">ResetApiUserServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetMaxBackoff">ResetMaxBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetMinBackoff">ResetMinBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetRps">ResetRps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetUserAgentOperatorSuffix">ResetUserAgentOperatorSuffix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetApiBasePath` <a name="ResetApiBasePath" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiBasePath"></a>

```csharp
private void ResetApiBasePath()
```

##### `ResetApiClientLogging` <a name="ResetApiClientLogging" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiClientLogging"></a>

```csharp
private void ResetApiClientLogging()
```

##### `ResetApiHostname` <a name="ResetApiHostname" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiHostname"></a>

```csharp
private void ResetApiHostname()
```

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiToken"></a>

```csharp
private void ResetApiToken()
```

##### `ResetApiUserServiceKey` <a name="ResetApiUserServiceKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiUserServiceKey"></a>

```csharp
private void ResetApiUserServiceKey()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetMaxBackoff` <a name="ResetMaxBackoff" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetMaxBackoff"></a>

```csharp
private void ResetMaxBackoff()
```

##### `ResetMinBackoff` <a name="ResetMinBackoff" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetMinBackoff"></a>

```csharp
private void ResetMinBackoff()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetRps` <a name="ResetRps" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetRps"></a>

```csharp
private void ResetRps()
```

##### `ResetUserAgentOperatorSuffix` <a name="ResetUserAgentOperatorSuffix" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetUserAgentOperatorSuffix"></a>

```csharp
private void ResetUserAgentOperatorSuffix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudflareProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudflareProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudflareProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudflareProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudflareProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudflareProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudflareProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiBasePathInput">ApiBasePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiClientLoggingInput">ApiClientLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiHostnameInput">ApiHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiTokenInput">ApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKeyInput">ApiUserServiceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.maxBackoffInput">MaxBackoffInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.minBackoffInput">MinBackoffInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.rpsInput">RpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffixInput">UserAgentOperatorSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiBasePath">ApiBasePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiClientLogging">ApiClientLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiHostname">ApiHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiToken">ApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKey">ApiUserServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.maxBackoff">MaxBackoff</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.minBackoff">MinBackoff</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.rps">Rps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffix">UserAgentOperatorSuffix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ApiBasePathInput`<sup>Optional</sup> <a name="ApiBasePathInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiBasePathInput"></a>

```csharp
public string ApiBasePathInput { get; }
```

- *Type:* string

---

##### `ApiClientLoggingInput`<sup>Optional</sup> <a name="ApiClientLoggingInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiClientLoggingInput"></a>

```csharp
public object ApiClientLoggingInput { get; }
```

- *Type:* object

---

##### `ApiHostnameInput`<sup>Optional</sup> <a name="ApiHostnameInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiHostnameInput"></a>

```csharp
public string ApiHostnameInput { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiTokenInput"></a>

```csharp
public string ApiTokenInput { get; }
```

- *Type:* string

---

##### `ApiUserServiceKeyInput`<sup>Optional</sup> <a name="ApiUserServiceKeyInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKeyInput"></a>

```csharp
public string ApiUserServiceKeyInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `MaxBackoffInput`<sup>Optional</sup> <a name="MaxBackoffInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.maxBackoffInput"></a>

```csharp
public double MaxBackoffInput { get; }
```

- *Type:* double

---

##### `MinBackoffInput`<sup>Optional</sup> <a name="MinBackoffInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.minBackoffInput"></a>

```csharp
public double MinBackoffInput { get; }
```

- *Type:* double

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `RpsInput`<sup>Optional</sup> <a name="RpsInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.rpsInput"></a>

```csharp
public double RpsInput { get; }
```

- *Type:* double

---

##### `UserAgentOperatorSuffixInput`<sup>Optional</sup> <a name="UserAgentOperatorSuffixInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffixInput"></a>

```csharp
public string UserAgentOperatorSuffixInput { get; }
```

- *Type:* string

---

##### `ApiBasePath`<sup>Optional</sup> <a name="ApiBasePath" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiBasePath"></a>

```csharp
public string ApiBasePath { get; }
```

- *Type:* string

---

##### `ApiClientLogging`<sup>Optional</sup> <a name="ApiClientLogging" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiClientLogging"></a>

```csharp
public object ApiClientLogging { get; }
```

- *Type:* object

---

##### `ApiHostname`<sup>Optional</sup> <a name="ApiHostname" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiHostname"></a>

```csharp
public string ApiHostname { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiToken"></a>

```csharp
public string ApiToken { get; }
```

- *Type:* string

---

##### `ApiUserServiceKey`<sup>Optional</sup> <a name="ApiUserServiceKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKey"></a>

```csharp
public string ApiUserServiceKey { get; }
```

- *Type:* string

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `MaxBackoff`<sup>Optional</sup> <a name="MaxBackoff" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.maxBackoff"></a>

```csharp
public double MaxBackoff { get; }
```

- *Type:* double

---

##### `MinBackoff`<sup>Optional</sup> <a name="MinBackoff" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.minBackoff"></a>

```csharp
public double MinBackoff { get; }
```

- *Type:* double

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `Rps`<sup>Optional</sup> <a name="Rps" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.rps"></a>

```csharp
public double Rps { get; }
```

- *Type:* double

---

##### `UserAgentOperatorSuffix`<sup>Optional</sup> <a name="UserAgentOperatorSuffix" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffix"></a>

```csharp
public string UserAgentOperatorSuffix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudflareProviderConfig <a name="CloudflareProviderConfig" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CloudflareProviderConfig {
    string Alias = null,
    string ApiBasePath = null,
    object ApiClientLogging = null,
    string ApiHostname = null,
    string ApiKey = null,
    string ApiToken = null,
    string ApiUserServiceKey = null,
    string Email = null,
    double MaxBackoff = null,
    double MinBackoff = null,
    double Retries = null,
    double Rps = null,
    string UserAgentOperatorSuffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiBasePath">ApiBasePath</a></code> | <code>string</code> | Configure the base path used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_BASE_PATH` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiClientLogging">ApiClientLogging</a></code> | <code>object</code> | Whether to print logs from the API client (using the default log library logger). |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiHostname">ApiHostname</a></code> | <code>string</code> | Configure the hostname used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_HOSTNAME` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | The API key for operations. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiToken">ApiToken</a></code> | <code>string</code> | The API Token for operations. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiUserServiceKey">ApiUserServiceKey</a></code> | <code>string</code> | A special Cloudflare API key good for a restricted set of endpoints. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.email">Email</a></code> | <code>string</code> | A registered Cloudflare email address. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.maxBackoff">MaxBackoff</a></code> | <code>double</code> | Maximum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MAX_BACKOFF` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.minBackoff">MinBackoff</a></code> | <code>double</code> | Minimum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MIN_BACKOFF` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.retries">Retries</a></code> | <code>double</code> | Maximum number of retries to perform when an API request fails. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.rps">Rps</a></code> | <code>double</code> | RPS limit to apply when making calls to the API. Alternatively, can be configured using the `CLOUDFLARE_RPS` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.userAgentOperatorSuffix">UserAgentOperatorSuffix</a></code> | <code>string</code> | A value to append to the HTTP User Agent for all API calls. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#alias CloudflareProvider#alias}

---

##### `ApiBasePath`<sup>Optional</sup> <a name="ApiBasePath" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiBasePath"></a>

```csharp
public string ApiBasePath { get; set; }
```

- *Type:* string

Configure the base path used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_BASE_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#api_base_path CloudflareProvider#api_base_path}

---

##### `ApiClientLogging`<sup>Optional</sup> <a name="ApiClientLogging" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiClientLogging"></a>

```csharp
public object ApiClientLogging { get; set; }
```

- *Type:* object

Whether to print logs from the API client (using the default log library logger).

Alternatively, can be configured using the `CLOUDFLARE_API_CLIENT_LOGGING` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#api_client_logging CloudflareProvider#api_client_logging}

---

##### `ApiHostname`<sup>Optional</sup> <a name="ApiHostname" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiHostname"></a>

```csharp
public string ApiHostname { get; set; }
```

- *Type:* string

Configure the hostname used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_HOSTNAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#api_hostname CloudflareProvider#api_hostname}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

The API key for operations.

Alternatively, can be configured using the `CLOUDFLARE_API_KEY` environment variable. API keys are [now considered legacy by Cloudflare](https://developers.cloudflare.com/fundamentals/api/get-started/keys/#limitations), API tokens should be used instead. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#api_key CloudflareProvider#api_key}

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiToken"></a>

```csharp
public string ApiToken { get; set; }
```

- *Type:* string

The API Token for operations.

Alternatively, can be configured using the `CLOUDFLARE_API_TOKEN` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#api_token CloudflareProvider#api_token}

---

##### `ApiUserServiceKey`<sup>Optional</sup> <a name="ApiUserServiceKey" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiUserServiceKey"></a>

```csharp
public string ApiUserServiceKey { get; set; }
```

- *Type:* string

A special Cloudflare API key good for a restricted set of endpoints.

Alternatively, can be configured using the `CLOUDFLARE_API_USER_SERVICE_KEY` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#api_user_service_key CloudflareProvider#api_user_service_key}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

A registered Cloudflare email address.

Alternatively, can be configured using the `CLOUDFLARE_EMAIL` environment variable. Required when using `api_key`. Conflicts with `api_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#email CloudflareProvider#email}

---

##### `MaxBackoff`<sup>Optional</sup> <a name="MaxBackoff" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.maxBackoff"></a>

```csharp
public double MaxBackoff { get; set; }
```

- *Type:* double

Maximum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MAX_BACKOFF` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#max_backoff CloudflareProvider#max_backoff}

---

##### `MinBackoff`<sup>Optional</sup> <a name="MinBackoff" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.minBackoff"></a>

```csharp
public double MinBackoff { get; set; }
```

- *Type:* double

Minimum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MIN_BACKOFF` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#min_backoff CloudflareProvider#min_backoff}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

Maximum number of retries to perform when an API request fails.

Alternatively, can be configured using the `CLOUDFLARE_RETRIES` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#retries CloudflareProvider#retries}

---

##### `Rps`<sup>Optional</sup> <a name="Rps" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.rps"></a>

```csharp
public double Rps { get; set; }
```

- *Type:* double

RPS limit to apply when making calls to the API. Alternatively, can be configured using the `CLOUDFLARE_RPS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#rps CloudflareProvider#rps}

---

##### `UserAgentOperatorSuffix`<sup>Optional</sup> <a name="UserAgentOperatorSuffix" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.userAgentOperatorSuffix"></a>

```csharp
public string UserAgentOperatorSuffix { get; set; }
```

- *Type:* string

A value to append to the HTTP User Agent for all API calls.

This value is not something most users need to modify however, if you are using a non-standard provider or operator configuration, this is recommended to assist in uniquely identifying your traffic. **Setting this value will remove the Terraform version from the HTTP User Agent string and may have unintended consequences**. Alternatively, can be configured using the `CLOUDFLARE_USER_AGENT_OPERATOR_SUFFIX` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs#user_agent_operator_suffix CloudflareProvider#user_agent_operator_suffix}

---



