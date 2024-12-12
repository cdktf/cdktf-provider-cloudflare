# `zeroTrustAccessApplication` Submodule <a name="`zeroTrustAccessApplication` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessApplication <a name="ZeroTrustAccessApplication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application cloudflare_zero_trust_access_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplication(scope: Construct, id: string, config?: ZeroTrustAccessApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig">ZeroTrustAccessApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig">ZeroTrustAccessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putCorsHeaders">putCorsHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putFooterLinks">putFooterLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putLandingPageDesign">putLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putSaasApp">putSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putScimConfig">putScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putTargetCriteria">putTargetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAllowAuthenticateViaWarp">resetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAllowedIdps">resetAllowedIdps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAppLauncherLogoUrl">resetAppLauncherLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAppLauncherVisible">resetAppLauncherVisible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAutoRedirectToIdentity">resetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetBgColor">resetBgColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCorsHeaders">resetCorsHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomDenyMessage">resetCustomDenyMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomDenyUrl">resetCustomDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomNonIdentityDenyUrl">resetCustomNonIdentityDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomPages">resetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDomainType">resetDomainType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetEnableBindingCookie">resetEnableBindingCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetFooterLinks">resetFooterLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetHeaderBgColor">resetHeaderBgColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetHttpOnlyCookieAttribute">resetHttpOnlyCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetLandingPageDesign">resetLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetLogoUrl">resetLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetOptionsPreflightBypass">resetOptionsPreflightBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSaasApp">resetSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSameSiteCookieAttribute">resetSameSiteCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetScimConfig">resetScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSelfHostedDomains">resetSelfHostedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetServiceAuth401Redirect">resetServiceAuth401Redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSkipAppLauncherLoginPage">resetSkipAppLauncherLoginPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSkipInterstitial">resetSkipInterstitial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetTargetCriteria">resetTargetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorsHeaders` <a name="putCorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putCorsHeaders"></a>

```typescript
public putCorsHeaders(value: IResolvable | ZeroTrustAccessApplicationCorsHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putCorsHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders">ZeroTrustAccessApplicationCorsHeaders</a>[]

---

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | ZeroTrustAccessApplicationDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations">ZeroTrustAccessApplicationDestinations</a>[]

---

##### `putFooterLinks` <a name="putFooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putFooterLinks"></a>

```typescript
public putFooterLinks(value: IResolvable | ZeroTrustAccessApplicationFooterLinks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putFooterLinks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks">ZeroTrustAccessApplicationFooterLinks</a>[]

---

##### `putLandingPageDesign` <a name="putLandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putLandingPageDesign"></a>

```typescript
public putLandingPageDesign(value: ZeroTrustAccessApplicationLandingPageDesign): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putLandingPageDesign.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

---

##### `putSaasApp` <a name="putSaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putSaasApp"></a>

```typescript
public putSaasApp(value: ZeroTrustAccessApplicationSaasApp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putSaasApp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

---

##### `putScimConfig` <a name="putScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putScimConfig"></a>

```typescript
public putScimConfig(value: ZeroTrustAccessApplicationScimConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putScimConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

---

##### `putTargetCriteria` <a name="putTargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putTargetCriteria"></a>

```typescript
public putTargetCriteria(value: IResolvable | ZeroTrustAccessApplicationTargetCriteria[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putTargetCriteria.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria">ZeroTrustAccessApplicationTargetCriteria</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAllowAuthenticateViaWarp` <a name="resetAllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAllowAuthenticateViaWarp"></a>

```typescript
public resetAllowAuthenticateViaWarp(): void
```

##### `resetAllowedIdps` <a name="resetAllowedIdps" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAllowedIdps"></a>

```typescript
public resetAllowedIdps(): void
```

##### `resetAppLauncherLogoUrl` <a name="resetAppLauncherLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAppLauncherLogoUrl"></a>

```typescript
public resetAppLauncherLogoUrl(): void
```

##### `resetAppLauncherVisible` <a name="resetAppLauncherVisible" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAppLauncherVisible"></a>

```typescript
public resetAppLauncherVisible(): void
```

##### `resetAutoRedirectToIdentity` <a name="resetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAutoRedirectToIdentity"></a>

```typescript
public resetAutoRedirectToIdentity(): void
```

##### `resetBgColor` <a name="resetBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetBgColor"></a>

```typescript
public resetBgColor(): void
```

##### `resetCorsHeaders` <a name="resetCorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCorsHeaders"></a>

```typescript
public resetCorsHeaders(): void
```

##### `resetCustomDenyMessage` <a name="resetCustomDenyMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomDenyMessage"></a>

```typescript
public resetCustomDenyMessage(): void
```

##### `resetCustomDenyUrl` <a name="resetCustomDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomDenyUrl"></a>

```typescript
public resetCustomDenyUrl(): void
```

##### `resetCustomNonIdentityDenyUrl` <a name="resetCustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomNonIdentityDenyUrl"></a>

```typescript
public resetCustomNonIdentityDenyUrl(): void
```

##### `resetCustomPages` <a name="resetCustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomPages"></a>

```typescript
public resetCustomPages(): void
```

##### `resetDestinations` <a name="resetDestinations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetDomainType` <a name="resetDomainType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDomainType"></a>

```typescript
public resetDomainType(): void
```

##### `resetEnableBindingCookie` <a name="resetEnableBindingCookie" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetEnableBindingCookie"></a>

```typescript
public resetEnableBindingCookie(): void
```

##### `resetFooterLinks` <a name="resetFooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetFooterLinks"></a>

```typescript
public resetFooterLinks(): void
```

##### `resetHeaderBgColor` <a name="resetHeaderBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetHeaderBgColor"></a>

```typescript
public resetHeaderBgColor(): void
```

##### `resetHttpOnlyCookieAttribute` <a name="resetHttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetHttpOnlyCookieAttribute"></a>

```typescript
public resetHttpOnlyCookieAttribute(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLandingPageDesign` <a name="resetLandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetLandingPageDesign"></a>

```typescript
public resetLandingPageDesign(): void
```

##### `resetLogoUrl` <a name="resetLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetLogoUrl"></a>

```typescript
public resetLogoUrl(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOptionsPreflightBypass` <a name="resetOptionsPreflightBypass" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetOptionsPreflightBypass"></a>

```typescript
public resetOptionsPreflightBypass(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetSaasApp` <a name="resetSaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSaasApp"></a>

```typescript
public resetSaasApp(): void
```

##### `resetSameSiteCookieAttribute` <a name="resetSameSiteCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSameSiteCookieAttribute"></a>

```typescript
public resetSameSiteCookieAttribute(): void
```

##### `resetScimConfig` <a name="resetScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetScimConfig"></a>

```typescript
public resetScimConfig(): void
```

##### `resetSelfHostedDomains` <a name="resetSelfHostedDomains" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSelfHostedDomains"></a>

```typescript
public resetSelfHostedDomains(): void
```

##### `resetServiceAuth401Redirect` <a name="resetServiceAuth401Redirect" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetServiceAuth401Redirect"></a>

```typescript
public resetServiceAuth401Redirect(): void
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSessionDuration"></a>

```typescript
public resetSessionDuration(): void
```

##### `resetSkipAppLauncherLoginPage` <a name="resetSkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSkipAppLauncherLoginPage"></a>

```typescript
public resetSkipAppLauncherLoginPage(): void
```

##### `resetSkipInterstitial` <a name="resetSkipInterstitial" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSkipInterstitial"></a>

```typescript
public resetSkipInterstitial(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetCriteria` <a name="resetTargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetTargetCriteria"></a>

```typescript
public resetTargetCriteria(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetType"></a>

```typescript
public resetType(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isConstruct"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

zeroTrustAccessApplication.ZeroTrustAccessApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformElement"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformResource"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustAccessApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.aud">aud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeaders">corsHeaders</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList">ZeroTrustAccessApplicationCorsHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList">ZeroTrustAccessApplicationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinks">footerLinks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList">ZeroTrustAccessApplicationFooterLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesign">landingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference">ZeroTrustAccessApplicationLandingPageDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasApp">saasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference">ZeroTrustAccessApplicationSaasAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfig">scimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference">ZeroTrustAccessApplicationScimConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteria">targetCriteria</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList">ZeroTrustAccessApplicationTargetCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarpInput">allowAuthenticateViaWarpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdpsInput">allowedIdpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrlInput">appLauncherLogoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisibleInput">appLauncherVisibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentityInput">autoRedirectToIdentityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColorInput">bgColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeadersInput">corsHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders">ZeroTrustAccessApplicationCorsHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessageInput">customDenyMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrlInput">customDenyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrlInput">customNonIdentityDenyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPagesInput">customPagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.destinationsInput">destinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations">ZeroTrustAccessApplicationDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainTypeInput">domainTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookieInput">enableBindingCookieInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinksInput">footerLinksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks">ZeroTrustAccessApplicationFooterLinks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColorInput">headerBgColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttributeInput">httpOnlyCookieAttributeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesignInput">landingPageDesignInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrlInput">logoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypassInput">optionsPreflightBypassInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasAppInput">saasAppInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttributeInput">sameSiteCookieAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfigInput">scimConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomainsInput">selfHostedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401RedirectInput">serviceAuth401RedirectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDurationInput">sessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPageInput">skipAppLauncherLoginPageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitialInput">skipInterstitialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteriaInput">targetCriteriaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria">ZeroTrustAccessApplicationTargetCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdps">allowedIdps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrl">appLauncherLogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisible">appLauncherVisible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColor">bgColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessage">customDenyMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrl">customDenyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrl">customNonIdentityDenyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPages">customPages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainType">domainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookie">enableBindingCookie</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColor">headerBgColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttribute">httpOnlyCookieAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypass">optionsPreflightBypass</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttribute">sameSiteCookieAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomains">selfHostedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401Redirect">serviceAuth401Redirect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDuration">sessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPage">skipAppLauncherLoginPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitial">skipInterstitial</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aud`<sup>Required</sup> <a name="aud" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.aud"></a>

```typescript
public readonly aud: string;
```

- *Type:* string

---

##### `corsHeaders`<sup>Required</sup> <a name="corsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeaders"></a>

```typescript
public readonly corsHeaders: ZeroTrustAccessApplicationCorsHeadersList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList">ZeroTrustAccessApplicationCorsHeadersList</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.destinations"></a>

```typescript
public readonly destinations: ZeroTrustAccessApplicationDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList">ZeroTrustAccessApplicationDestinationsList</a>

---

##### `footerLinks`<sup>Required</sup> <a name="footerLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinks"></a>

```typescript
public readonly footerLinks: ZeroTrustAccessApplicationFooterLinksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList">ZeroTrustAccessApplicationFooterLinksList</a>

---

##### `landingPageDesign`<sup>Required</sup> <a name="landingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesign"></a>

```typescript
public readonly landingPageDesign: ZeroTrustAccessApplicationLandingPageDesignOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference">ZeroTrustAccessApplicationLandingPageDesignOutputReference</a>

---

##### `saasApp`<sup>Required</sup> <a name="saasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasApp"></a>

```typescript
public readonly saasApp: ZeroTrustAccessApplicationSaasAppOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference">ZeroTrustAccessApplicationSaasAppOutputReference</a>

---

##### `scimConfig`<sup>Required</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfig"></a>

```typescript
public readonly scimConfig: ZeroTrustAccessApplicationScimConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference">ZeroTrustAccessApplicationScimConfigOutputReference</a>

---

##### `targetCriteria`<sup>Required</sup> <a name="targetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteria"></a>

```typescript
public readonly targetCriteria: ZeroTrustAccessApplicationTargetCriteriaList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList">ZeroTrustAccessApplicationTargetCriteriaList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="allowAuthenticateViaWarpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarpInput"></a>

```typescript
public readonly allowAuthenticateViaWarpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedIdpsInput`<sup>Optional</sup> <a name="allowedIdpsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdpsInput"></a>

```typescript
public readonly allowedIdpsInput: string[];
```

- *Type:* string[]

---

##### `appLauncherLogoUrlInput`<sup>Optional</sup> <a name="appLauncherLogoUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrlInput"></a>

```typescript
public readonly appLauncherLogoUrlInput: string;
```

- *Type:* string

---

##### `appLauncherVisibleInput`<sup>Optional</sup> <a name="appLauncherVisibleInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisibleInput"></a>

```typescript
public readonly appLauncherVisibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRedirectToIdentityInput`<sup>Optional</sup> <a name="autoRedirectToIdentityInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentityInput"></a>

```typescript
public readonly autoRedirectToIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bgColorInput`<sup>Optional</sup> <a name="bgColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColorInput"></a>

```typescript
public readonly bgColorInput: string;
```

- *Type:* string

---

##### `corsHeadersInput`<sup>Optional</sup> <a name="corsHeadersInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeadersInput"></a>

```typescript
public readonly corsHeadersInput: IResolvable | ZeroTrustAccessApplicationCorsHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders">ZeroTrustAccessApplicationCorsHeaders</a>[]

---

##### `customDenyMessageInput`<sup>Optional</sup> <a name="customDenyMessageInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessageInput"></a>

```typescript
public readonly customDenyMessageInput: string;
```

- *Type:* string

---

##### `customDenyUrlInput`<sup>Optional</sup> <a name="customDenyUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrlInput"></a>

```typescript
public readonly customDenyUrlInput: string;
```

- *Type:* string

---

##### `customNonIdentityDenyUrlInput`<sup>Optional</sup> <a name="customNonIdentityDenyUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrlInput"></a>

```typescript
public readonly customNonIdentityDenyUrlInput: string;
```

- *Type:* string

---

##### `customPagesInput`<sup>Optional</sup> <a name="customPagesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPagesInput"></a>

```typescript
public readonly customPagesInput: string[];
```

- *Type:* string[]

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | ZeroTrustAccessApplicationDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations">ZeroTrustAccessApplicationDestinations</a>[]

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domainTypeInput`<sup>Optional</sup> <a name="domainTypeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainTypeInput"></a>

```typescript
public readonly domainTypeInput: string;
```

- *Type:* string

---

##### `enableBindingCookieInput`<sup>Optional</sup> <a name="enableBindingCookieInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookieInput"></a>

```typescript
public readonly enableBindingCookieInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `footerLinksInput`<sup>Optional</sup> <a name="footerLinksInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinksInput"></a>

```typescript
public readonly footerLinksInput: IResolvable | ZeroTrustAccessApplicationFooterLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks">ZeroTrustAccessApplicationFooterLinks</a>[]

---

##### `headerBgColorInput`<sup>Optional</sup> <a name="headerBgColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColorInput"></a>

```typescript
public readonly headerBgColorInput: string;
```

- *Type:* string

---

##### `httpOnlyCookieAttributeInput`<sup>Optional</sup> <a name="httpOnlyCookieAttributeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttributeInput"></a>

```typescript
public readonly httpOnlyCookieAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `landingPageDesignInput`<sup>Optional</sup> <a name="landingPageDesignInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesignInput"></a>

```typescript
public readonly landingPageDesignInput: ZeroTrustAccessApplicationLandingPageDesign;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

---

##### `logoUrlInput`<sup>Optional</sup> <a name="logoUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrlInput"></a>

```typescript
public readonly logoUrlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsPreflightBypassInput`<sup>Optional</sup> <a name="optionsPreflightBypassInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypassInput"></a>

```typescript
public readonly optionsPreflightBypassInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `saasAppInput`<sup>Optional</sup> <a name="saasAppInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasAppInput"></a>

```typescript
public readonly saasAppInput: ZeroTrustAccessApplicationSaasApp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

---

##### `sameSiteCookieAttributeInput`<sup>Optional</sup> <a name="sameSiteCookieAttributeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttributeInput"></a>

```typescript
public readonly sameSiteCookieAttributeInput: string;
```

- *Type:* string

---

##### `scimConfigInput`<sup>Optional</sup> <a name="scimConfigInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfigInput"></a>

```typescript
public readonly scimConfigInput: ZeroTrustAccessApplicationScimConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

---

##### `selfHostedDomainsInput`<sup>Optional</sup> <a name="selfHostedDomainsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomainsInput"></a>

```typescript
public readonly selfHostedDomainsInput: string[];
```

- *Type:* string[]

---

##### `serviceAuth401RedirectInput`<sup>Optional</sup> <a name="serviceAuth401RedirectInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401RedirectInput"></a>

```typescript
public readonly serviceAuth401RedirectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDurationInput"></a>

```typescript
public readonly sessionDurationInput: string;
```

- *Type:* string

---

##### `skipAppLauncherLoginPageInput`<sup>Optional</sup> <a name="skipAppLauncherLoginPageInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPageInput"></a>

```typescript
public readonly skipAppLauncherLoginPageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipInterstitialInput`<sup>Optional</sup> <a name="skipInterstitialInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitialInput"></a>

```typescript
public readonly skipInterstitialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `targetCriteriaInput`<sup>Optional</sup> <a name="targetCriteriaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteriaInput"></a>

```typescript
public readonly targetCriteriaInput: IResolvable | ZeroTrustAccessApplicationTargetCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria">ZeroTrustAccessApplicationTargetCriteria</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowAuthenticateViaWarp`<sup>Required</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarp"></a>

```typescript
public readonly allowAuthenticateViaWarp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedIdps`<sup>Required</sup> <a name="allowedIdps" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdps"></a>

```typescript
public readonly allowedIdps: string[];
```

- *Type:* string[]

---

##### `appLauncherLogoUrl`<sup>Required</sup> <a name="appLauncherLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrl"></a>

```typescript
public readonly appLauncherLogoUrl: string;
```

- *Type:* string

---

##### `appLauncherVisible`<sup>Required</sup> <a name="appLauncherVisible" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisible"></a>

```typescript
public readonly appLauncherVisible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRedirectToIdentity`<sup>Required</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentity"></a>

```typescript
public readonly autoRedirectToIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bgColor`<sup>Required</sup> <a name="bgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColor"></a>

```typescript
public readonly bgColor: string;
```

- *Type:* string

---

##### `customDenyMessage`<sup>Required</sup> <a name="customDenyMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessage"></a>

```typescript
public readonly customDenyMessage: string;
```

- *Type:* string

---

##### `customDenyUrl`<sup>Required</sup> <a name="customDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrl"></a>

```typescript
public readonly customDenyUrl: string;
```

- *Type:* string

---

##### `customNonIdentityDenyUrl`<sup>Required</sup> <a name="customNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrl"></a>

```typescript
public readonly customNonIdentityDenyUrl: string;
```

- *Type:* string

---

##### `customPages`<sup>Required</sup> <a name="customPages" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPages"></a>

```typescript
public readonly customPages: string[];
```

- *Type:* string[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domainType`<sup>Required</sup> <a name="domainType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainType"></a>

```typescript
public readonly domainType: string;
```

- *Type:* string

---

##### `enableBindingCookie`<sup>Required</sup> <a name="enableBindingCookie" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookie"></a>

```typescript
public readonly enableBindingCookie: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerBgColor`<sup>Required</sup> <a name="headerBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColor"></a>

```typescript
public readonly headerBgColor: string;
```

- *Type:* string

---

##### `httpOnlyCookieAttribute`<sup>Required</sup> <a name="httpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttribute"></a>

```typescript
public readonly httpOnlyCookieAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `optionsPreflightBypass`<sup>Required</sup> <a name="optionsPreflightBypass" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypass"></a>

```typescript
public readonly optionsPreflightBypass: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `sameSiteCookieAttribute`<sup>Required</sup> <a name="sameSiteCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttribute"></a>

```typescript
public readonly sameSiteCookieAttribute: string;
```

- *Type:* string

---

##### `selfHostedDomains`<sup>Required</sup> <a name="selfHostedDomains" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomains"></a>

```typescript
public readonly selfHostedDomains: string[];
```

- *Type:* string[]

---

##### `serviceAuth401Redirect`<sup>Required</sup> <a name="serviceAuth401Redirect" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401Redirect"></a>

```typescript
public readonly serviceAuth401Redirect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: string;
```

- *Type:* string

---

##### `skipAppLauncherLoginPage`<sup>Required</sup> <a name="skipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPage"></a>

```typescript
public readonly skipAppLauncherLoginPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipInterstitial`<sup>Required</sup> <a name="skipInterstitial" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitial"></a>

```typescript
public readonly skipInterstitial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessApplicationConfig <a name="ZeroTrustAccessApplicationConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationConfig: zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, users can authenticate to this application using their WARP session. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowedIdps">allowedIdps</a></code> | <code>string[]</code> | The identity providers selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherLogoUrl">appLauncherLogoUrl</a></code> | <code>string</code> | The logo URL of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherVisible">appLauncherVisible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to show/hide applications in App Launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.bgColor">bgColor</a></code> | <code>string</code> | The background color of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.corsHeaders">corsHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders">ZeroTrustAccessApplicationCorsHeaders</a>[]</code> | cors_headers block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyMessage">customDenyMessage</a></code> | <code>string</code> | Option that returns a custom error message when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyUrl">customDenyUrl</a></code> | <code>string</code> | Option that redirects to a custom URL when a user is denied access to the application via identity based rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customNonIdentityDenyUrl">customNonIdentityDenyUrl</a></code> | <code>string</code> | Option that redirects to a custom URL when a user is denied access to the application via non identity rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customPages">customPages</a></code> | <code>string[]</code> | The custom pages selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.destinations">destinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations">ZeroTrustAccessApplicationDestinations</a>[]</code> | destinations block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.domain">domain</a></code> | <code>string</code> | The primary hostname and path that Access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.domainType">domainType</a></code> | <code>string</code> | The type of the primary domain. Available values: `public`, `private`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.enableBindingCookie">enableBindingCookie</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.footerLinks">footerLinks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks">ZeroTrustAccessApplicationFooterLinks</a>[]</code> | footer_links block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.headerBgColor">headerBgColor</a></code> | <code>string</code> | The background color of the header bar in the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.httpOnlyCookieAttribute">httpOnlyCookieAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to add the `HttpOnly` cookie flag to access tokens. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.landingPageDesign">landingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a></code> | landing_page_design block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.logoUrl">logoUrl</a></code> | <code>string</code> | Image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.name">name</a></code> | <code>string</code> | Friendly name of the Access Application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.optionsPreflightBypass">optionsPreflightBypass</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows options preflight requests to bypass Access authentication and go directly to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.policies">policies</a></code> | <code>string[]</code> | The policies associated with the application, in ascending order of precedence. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.saasApp">saasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a></code> | saas_app block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sameSiteCookieAttribute">sameSiteCookieAttribute</a></code> | <code>string</code> | Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.scimConfig">scimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a></code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.selfHostedDomains">selfHostedDomains</a></code> | <code>string[]</code> | List of public domains secured by Access. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.serviceAuth401Redirect">serviceAuth401Redirect</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sessionDuration">sessionDuration</a></code> | <code>string</code> | How often a user will be forced to re-authorise. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipAppLauncherLoginPage">skipAppLauncherLoginPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to skip the App Launcher landing page. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipInterstitial">skipInterstitial</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to skip the authorization interstitial when using the CLI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.tags">tags</a></code> | <code>string[]</code> | The itags associated with the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.targetCriteria">targetCriteria</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria">ZeroTrustAccessApplicationTargetCriteria</a>[]</code> | target_criteria block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.type">type</a></code> | <code>string</code> | The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#account_id ZeroTrustAccessApplication#account_id}

---

##### `allowAuthenticateViaWarp`<sup>Optional</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowAuthenticateViaWarp"></a>

```typescript
public readonly allowAuthenticateViaWarp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, users can authenticate to this application using their WARP session.

When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#allow_authenticate_via_warp ZeroTrustAccessApplication#allow_authenticate_via_warp}

---

##### `allowedIdps`<sup>Optional</sup> <a name="allowedIdps" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowedIdps"></a>

```typescript
public readonly allowedIdps: string[];
```

- *Type:* string[]

The identity providers selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#allowed_idps ZeroTrustAccessApplication#allowed_idps}

---

##### `appLauncherLogoUrl`<sup>Optional</sup> <a name="appLauncherLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherLogoUrl"></a>

```typescript
public readonly appLauncherLogoUrl: string;
```

- *Type:* string

The logo URL of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#app_launcher_logo_url ZeroTrustAccessApplication#app_launcher_logo_url}

---

##### `appLauncherVisible`<sup>Optional</sup> <a name="appLauncherVisible" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherVisible"></a>

```typescript
public readonly appLauncherVisible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to show/hide applications in App Launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#app_launcher_visible ZeroTrustAccessApplication#app_launcher_visible}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.autoRedirectToIdentity"></a>

```typescript
public readonly autoRedirectToIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#auto_redirect_to_identity ZeroTrustAccessApplication#auto_redirect_to_identity}

---

##### `bgColor`<sup>Optional</sup> <a name="bgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.bgColor"></a>

```typescript
public readonly bgColor: string;
```

- *Type:* string

The background color of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#bg_color ZeroTrustAccessApplication#bg_color}

---

##### `corsHeaders`<sup>Optional</sup> <a name="corsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.corsHeaders"></a>

```typescript
public readonly corsHeaders: IResolvable | ZeroTrustAccessApplicationCorsHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders">ZeroTrustAccessApplicationCorsHeaders</a>[]

cors_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#cors_headers ZeroTrustAccessApplication#cors_headers}

---

##### `customDenyMessage`<sup>Optional</sup> <a name="customDenyMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyMessage"></a>

```typescript
public readonly customDenyMessage: string;
```

- *Type:* string

Option that returns a custom error message when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#custom_deny_message ZeroTrustAccessApplication#custom_deny_message}

---

##### `customDenyUrl`<sup>Optional</sup> <a name="customDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyUrl"></a>

```typescript
public readonly customDenyUrl: string;
```

- *Type:* string

Option that redirects to a custom URL when a user is denied access to the application via identity based rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#custom_deny_url ZeroTrustAccessApplication#custom_deny_url}

---

##### `customNonIdentityDenyUrl`<sup>Optional</sup> <a name="customNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customNonIdentityDenyUrl"></a>

```typescript
public readonly customNonIdentityDenyUrl: string;
```

- *Type:* string

Option that redirects to a custom URL when a user is denied access to the application via non identity rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#custom_non_identity_deny_url ZeroTrustAccessApplication#custom_non_identity_deny_url}

---

##### `customPages`<sup>Optional</sup> <a name="customPages" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customPages"></a>

```typescript
public readonly customPages: string[];
```

- *Type:* string[]

The custom pages selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#custom_pages ZeroTrustAccessApplication#custom_pages}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | ZeroTrustAccessApplicationDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations">ZeroTrustAccessApplicationDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#destinations ZeroTrustAccessApplication#destinations}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The primary hostname and path that Access will secure.

If the app is visible in the App Launcher dashboard, this is the domain that will be displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}

---

##### `domainType`<sup>Optional</sup> <a name="domainType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.domainType"></a>

```typescript
public readonly domainType: string;
```

- *Type:* string

The type of the primary domain. Available values: `public`, `private`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#domain_type ZeroTrustAccessApplication#domain_type}

---

##### `enableBindingCookie`<sup>Optional</sup> <a name="enableBindingCookie" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.enableBindingCookie"></a>

```typescript
public readonly enableBindingCookie: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#enable_binding_cookie ZeroTrustAccessApplication#enable_binding_cookie}

---

##### `footerLinks`<sup>Optional</sup> <a name="footerLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.footerLinks"></a>

```typescript
public readonly footerLinks: IResolvable | ZeroTrustAccessApplicationFooterLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks">ZeroTrustAccessApplicationFooterLinks</a>[]

footer_links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#footer_links ZeroTrustAccessApplication#footer_links}

---

##### `headerBgColor`<sup>Optional</sup> <a name="headerBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.headerBgColor"></a>

```typescript
public readonly headerBgColor: string;
```

- *Type:* string

The background color of the header bar in the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#header_bg_color ZeroTrustAccessApplication#header_bg_color}

---

##### `httpOnlyCookieAttribute`<sup>Optional</sup> <a name="httpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.httpOnlyCookieAttribute"></a>

```typescript
public readonly httpOnlyCookieAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to add the `HttpOnly` cookie flag to access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#http_only_cookie_attribute ZeroTrustAccessApplication#http_only_cookie_attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `landingPageDesign`<sup>Optional</sup> <a name="landingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.landingPageDesign"></a>

```typescript
public readonly landingPageDesign: ZeroTrustAccessApplicationLandingPageDesign;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

landing_page_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#landing_page_design ZeroTrustAccessApplication#landing_page_design}

---

##### `logoUrl`<sup>Optional</sup> <a name="logoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

Image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#logo_url ZeroTrustAccessApplication#logo_url}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Friendly name of the Access Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `optionsPreflightBypass`<sup>Optional</sup> <a name="optionsPreflightBypass" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.optionsPreflightBypass"></a>

```typescript
public readonly optionsPreflightBypass: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows options preflight requests to bypass Access authentication and go directly to the origin.

Cannot turn on if cors_headers is set. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#options_preflight_bypass ZeroTrustAccessApplication#options_preflight_bypass}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

The policies associated with the application, in ascending order of precedence.

Warning: Do not use this field while you still have this application ID referenced as `application_id` in any `cloudflare_access_policy` resource, as it can result in an inconsistent state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#policies ZeroTrustAccessApplication#policies}

---

##### `saasApp`<sup>Optional</sup> <a name="saasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.saasApp"></a>

```typescript
public readonly saasApp: ZeroTrustAccessApplicationSaasApp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

saas_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#saas_app ZeroTrustAccessApplication#saas_app}

---

##### `sameSiteCookieAttribute`<sup>Optional</sup> <a name="sameSiteCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sameSiteCookieAttribute"></a>

```typescript
public readonly sameSiteCookieAttribute: string;
```

- *Type:* string

Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#same_site_cookie_attribute ZeroTrustAccessApplication#same_site_cookie_attribute}

---

##### `scimConfig`<sup>Optional</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.scimConfig"></a>

```typescript
public readonly scimConfig: ZeroTrustAccessApplicationScimConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#scim_config ZeroTrustAccessApplication#scim_config}

---

##### `selfHostedDomains`<sup>Optional</sup> <a name="selfHostedDomains" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.selfHostedDomains"></a>

```typescript
public readonly selfHostedDomains: string[];
```

- *Type:* string[]

List of public domains secured by Access.

Only present for self_hosted, vnc, and ssh applications. Always includes the value set as `domain`. Deprecated in favor of `destinations` and will be removed in the next major version. Conflicts with `destinations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#self_hosted_domains ZeroTrustAccessApplication#self_hosted_domains}

---

##### `serviceAuth401Redirect`<sup>Optional</sup> <a name="serviceAuth401Redirect" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.serviceAuth401Redirect"></a>

```typescript
public readonly serviceAuth401Redirect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#service_auth_401_redirect ZeroTrustAccessApplication#service_auth_401_redirect}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: string;
```

- *Type:* string

How often a user will be forced to re-authorise.

Must be in the format `48h` or `2h45m`. Defaults to `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#session_duration ZeroTrustAccessApplication#session_duration}

---

##### `skipAppLauncherLoginPage`<sup>Optional</sup> <a name="skipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipAppLauncherLoginPage"></a>

```typescript
public readonly skipAppLauncherLoginPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to skip the App Launcher landing page. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#skip_app_launcher_login_page ZeroTrustAccessApplication#skip_app_launcher_login_page}

---

##### `skipInterstitial`<sup>Optional</sup> <a name="skipInterstitial" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipInterstitial"></a>

```typescript
public readonly skipInterstitial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to skip the authorization interstitial when using the CLI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#skip_interstitial ZeroTrustAccessApplication#skip_interstitial}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The itags associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#tags ZeroTrustAccessApplication#tags}

---

##### `targetCriteria`<sup>Optional</sup> <a name="targetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.targetCriteria"></a>

```typescript
public readonly targetCriteria: IResolvable | ZeroTrustAccessApplicationTargetCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria">ZeroTrustAccessApplicationTargetCriteria</a>[]

target_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#target_criteria ZeroTrustAccessApplication#target_criteria}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#type ZeroTrustAccessApplication#type}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#zone_id ZeroTrustAccessApplication#zone_id}

---

### ZeroTrustAccessApplicationCorsHeaders <a name="ZeroTrustAccessApplicationCorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationCorsHeaders: zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllHeaders">allowAllHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | Value to determine whether all HTTP headers are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllMethods">allowAllMethods</a></code> | <code>boolean \| cdktf.IResolvable</code> | Value to determine whether all methods are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllOrigins">allowAllOrigins</a></code> | <code>boolean \| cdktf.IResolvable</code> | Value to determine whether all origins are permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | List of HTTP headers to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | List of methods to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | List of origins permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.maxAge">maxAge</a></code> | <code>number</code> | The maximum time a preflight request will be cached. |

---

##### `allowAllHeaders`<sup>Optional</sup> <a name="allowAllHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllHeaders"></a>

```typescript
public readonly allowAllHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Value to determine whether all HTTP headers are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#allow_all_headers ZeroTrustAccessApplication#allow_all_headers}

---

##### `allowAllMethods`<sup>Optional</sup> <a name="allowAllMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllMethods"></a>

```typescript
public readonly allowAllMethods: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Value to determine whether all methods are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#allow_all_methods ZeroTrustAccessApplication#allow_all_methods}

---

##### `allowAllOrigins`<sup>Optional</sup> <a name="allowAllOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllOrigins"></a>

```typescript
public readonly allowAllOrigins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Value to determine whether all origins are permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#allow_all_origins ZeroTrustAccessApplication#allow_all_origins}

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#allow_credentials ZeroTrustAccessApplication#allow_credentials}

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

List of HTTP headers to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#allowed_headers ZeroTrustAccessApplication#allowed_headers}

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

List of methods to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#allowed_methods ZeroTrustAccessApplication#allowed_methods}

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

List of origins permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#allowed_origins ZeroTrustAccessApplication#allowed_origins}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

The maximum time a preflight request will be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#max_age ZeroTrustAccessApplication#max_age}

---

### ZeroTrustAccessApplicationDestinations <a name="ZeroTrustAccessApplicationDestinations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationDestinations: zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations.property.uri">uri</a></code> | <code>string</code> | The URI of the destination. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations.property.type">type</a></code> | <code>string</code> | The destination type. Available values: `public`, `private`. Defaults to `public`. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The URI of the destination.

Public destinations can include a domain and path with wildcards. Private destinations are an early access feature and gated behind a feature flag. Private destinations support private IPv4, IPv6, and Server Name Indications (SNI) with optional port ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#uri ZeroTrustAccessApplication#uri}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The destination type. Available values: `public`, `private`. Defaults to `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#type ZeroTrustAccessApplication#type}

---

### ZeroTrustAccessApplicationFooterLinks <a name="ZeroTrustAccessApplicationFooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationFooterLinks: zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.name">name</a></code> | <code>string</code> | The name of the footer link. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.url">url</a></code> | <code>string</code> | The URL of the footer link. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#url ZeroTrustAccessApplication#url}

---

### ZeroTrustAccessApplicationLandingPageDesign <a name="ZeroTrustAccessApplicationLandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationLandingPageDesign: zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonColor">buttonColor</a></code> | <code>string</code> | The button color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonTextColor">buttonTextColor</a></code> | <code>string</code> | The button text color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.imageUrl">imageUrl</a></code> | <code>string</code> | The URL of the image to be displayed in the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.message">message</a></code> | <code>string</code> | The message of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.title">title</a></code> | <code>string</code> | The title of the landing page. |

---

##### `buttonColor`<sup>Optional</sup> <a name="buttonColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonColor"></a>

```typescript
public readonly buttonColor: string;
```

- *Type:* string

The button color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#button_color ZeroTrustAccessApplication#button_color}

---

##### `buttonTextColor`<sup>Optional</sup> <a name="buttonTextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonTextColor"></a>

```typescript
public readonly buttonTextColor: string;
```

- *Type:* string

The button text color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#button_text_color ZeroTrustAccessApplication#button_text_color}

---

##### `imageUrl`<sup>Optional</sup> <a name="imageUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

The URL of the image to be displayed in the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#image_url ZeroTrustAccessApplication#image_url}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The message of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#message ZeroTrustAccessApplication#message}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#title ZeroTrustAccessApplication#title}

---

### ZeroTrustAccessApplicationSaasApp <a name="ZeroTrustAccessApplicationSaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationSaasApp: zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.accessTokenLifetime">accessTokenLifetime</a></code> | <code>string</code> | The lifetime of the Access Token after creation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.allowPkceWithoutClientSecret">allowPkceWithoutClientSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow PKCE flow without a client secret. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.appLauncherUrl">appLauncherUrl</a></code> | <code>string</code> | The URL where this applications tile redirects users. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.authType">authType</a></code> | <code>string</code> | **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.consumerServiceUrl">consumerServiceUrl</a></code> | <code>string</code> | The service provider's endpoint that is responsible for receiving and parsing a SAML assertion. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customAttribute">customAttribute</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute">ZeroTrustAccessApplicationSaasAppCustomAttribute</a>[]</code> | custom_attribute block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customClaim">customClaim</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim">ZeroTrustAccessApplicationSaasAppCustomClaim</a>[]</code> | custom_claim block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.defaultRelayState">defaultRelayState</a></code> | <code>string</code> | The relay state used if not provided by the identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | The OIDC flows supported by this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.groupFilterRegex">groupFilterRegex</a></code> | <code>string</code> | A regex to filter Cloudflare groups returned in ID token and userinfo endpoint. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.hybridAndImplicitOptions">hybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a></code> | hybrid_and_implicit_options block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdFormat">nameIdFormat</a></code> | <code>string</code> | The format of the name identifier sent to the SaaS application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdTransformJsonata">nameIdTransformJsonata</a></code> | <code>string</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.refreshTokenOptions">refreshTokenOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions">ZeroTrustAccessApplicationSaasAppRefreshTokenOptions</a>[]</code> | refresh_token_options block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.samlAttributeTransformJsonata">samlAttributeTransformJsonata</a></code> | <code>string</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.scopes">scopes</a></code> | <code>string[]</code> | Define the user information shared with access. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.spEntityId">spEntityId</a></code> | <code>string</code> | A globally unique name for an identity or service provider. |

---

##### `accessTokenLifetime`<sup>Optional</sup> <a name="accessTokenLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.accessTokenLifetime"></a>

```typescript
public readonly accessTokenLifetime: string;
```

- *Type:* string

The lifetime of the Access Token after creation.

Valid units are `m` and `h`. Must be greater than or equal to 1m and less than or equal to 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#access_token_lifetime ZeroTrustAccessApplication#access_token_lifetime}

---

##### `allowPkceWithoutClientSecret`<sup>Optional</sup> <a name="allowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.allowPkceWithoutClientSecret"></a>

```typescript
public readonly allowPkceWithoutClientSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow PKCE flow without a client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#allow_pkce_without_client_secret ZeroTrustAccessApplication#allow_pkce_without_client_secret}

---

##### `appLauncherUrl`<sup>Optional</sup> <a name="appLauncherUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.appLauncherUrl"></a>

```typescript
public readonly appLauncherUrl: string;
```

- *Type:* string

The URL where this applications tile redirects users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#app_launcher_url ZeroTrustAccessApplication#app_launcher_url}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

**Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#auth_type ZeroTrustAccessApplication#auth_type}

---

##### `consumerServiceUrl`<sup>Optional</sup> <a name="consumerServiceUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.consumerServiceUrl"></a>

```typescript
public readonly consumerServiceUrl: string;
```

- *Type:* string

The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#consumer_service_url ZeroTrustAccessApplication#consumer_service_url}

---

##### `customAttribute`<sup>Optional</sup> <a name="customAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customAttribute"></a>

```typescript
public readonly customAttribute: IResolvable | ZeroTrustAccessApplicationSaasAppCustomAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute">ZeroTrustAccessApplicationSaasAppCustomAttribute</a>[]

custom_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#custom_attribute ZeroTrustAccessApplication#custom_attribute}

---

##### `customClaim`<sup>Optional</sup> <a name="customClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customClaim"></a>

```typescript
public readonly customClaim: IResolvable | ZeroTrustAccessApplicationSaasAppCustomClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim">ZeroTrustAccessApplicationSaasAppCustomClaim</a>[]

custom_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#custom_claim ZeroTrustAccessApplication#custom_claim}

---

##### `defaultRelayState`<sup>Optional</sup> <a name="defaultRelayState" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.defaultRelayState"></a>

```typescript
public readonly defaultRelayState: string;
```

- *Type:* string

The relay state used if not provided by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#default_relay_state ZeroTrustAccessApplication#default_relay_state}

---

##### `grantTypes`<sup>Optional</sup> <a name="grantTypes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

The OIDC flows supported by this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#grant_types ZeroTrustAccessApplication#grant_types}

---

##### `groupFilterRegex`<sup>Optional</sup> <a name="groupFilterRegex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.groupFilterRegex"></a>

```typescript
public readonly groupFilterRegex: string;
```

- *Type:* string

A regex to filter Cloudflare groups returned in ID token and userinfo endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#group_filter_regex ZeroTrustAccessApplication#group_filter_regex}

---

##### `hybridAndImplicitOptions`<sup>Optional</sup> <a name="hybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.hybridAndImplicitOptions"></a>

```typescript
public readonly hybridAndImplicitOptions: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

hybrid_and_implicit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#hybrid_and_implicit_options ZeroTrustAccessApplication#hybrid_and_implicit_options}

---

##### `nameIdFormat`<sup>Optional</sup> <a name="nameIdFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdFormat"></a>

```typescript
public readonly nameIdFormat: string;
```

- *Type:* string

The format of the name identifier sent to the SaaS application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name_id_format ZeroTrustAccessApplication#name_id_format}

---

##### `nameIdTransformJsonata`<sup>Optional</sup> <a name="nameIdTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdTransformJsonata"></a>

```typescript
public readonly nameIdTransformJsonata: string;
```

- *Type:* string

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name_id_transform_jsonata ZeroTrustAccessApplication#name_id_transform_jsonata}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#redirect_uris ZeroTrustAccessApplication#redirect_uris}

---

##### `refreshTokenOptions`<sup>Optional</sup> <a name="refreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.refreshTokenOptions"></a>

```typescript
public readonly refreshTokenOptions: IResolvable | ZeroTrustAccessApplicationSaasAppRefreshTokenOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions">ZeroTrustAccessApplicationSaasAppRefreshTokenOptions</a>[]

refresh_token_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#refresh_token_options ZeroTrustAccessApplication#refresh_token_options}

---

##### `samlAttributeTransformJsonata`<sup>Optional</sup> <a name="samlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.samlAttributeTransformJsonata"></a>

```typescript
public readonly samlAttributeTransformJsonata: string;
```

- *Type:* string

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#saml_attribute_transform_jsonata ZeroTrustAccessApplication#saml_attribute_transform_jsonata}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Define the user information shared with access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}

---

##### `spEntityId`<sup>Optional</sup> <a name="spEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.spEntityId"></a>

```typescript
public readonly spEntityId: string;
```

- *Type:* string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#sp_entity_id ZeroTrustAccessApplication#sp_entity_id}

---

### ZeroTrustAccessApplicationSaasAppCustomAttribute <a name="ZeroTrustAccessApplicationSaasAppCustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationSaasAppCustomAttribute: zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.friendlyName">friendlyName</a></code> | <code>string</code> | A friendly name for the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.name">name</a></code> | <code>string</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.nameFormat">nameFormat</a></code> | <code>string</code> | A globally unique name for an identity or service provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the attribute must be always present. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.source"></a>

```typescript
public readonly source: ZeroTrustAccessApplicationSaasAppCustomAttributeSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

A friendly name for the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#friendly_name ZeroTrustAccessApplication#friendly_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `nameFormat`<sup>Optional</sup> <a name="nameFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.nameFormat"></a>

```typescript
public readonly nameFormat: string;
```

- *Type:* string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name_format ZeroTrustAccessApplication#name_format}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}

---

### ZeroTrustAccessApplicationSaasAppCustomAttributeSource <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationSaasAppCustomAttributeSource: zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.name">name</a></code> | <code>string</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.nameByIdp">nameByIdp</a></code> | <code>{[ key: string ]: string}</code> | A mapping from IdP ID to claim name. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `nameByIdp`<sup>Optional</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.nameByIdp"></a>

```typescript
public readonly nameByIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}

---

### ZeroTrustAccessApplicationSaasAppCustomClaim <a name="ZeroTrustAccessApplicationSaasAppCustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationSaasAppCustomClaim: zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.name">name</a></code> | <code>string</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the attribute must be always present. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.scope">scope</a></code> | <code>string</code> | The scope of the claim. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.source"></a>

```typescript
public readonly source: ZeroTrustAccessApplicationSaasAppCustomClaimSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#scope ZeroTrustAccessApplication#scope}

---

### ZeroTrustAccessApplicationSaasAppCustomClaimSource <a name="ZeroTrustAccessApplicationSaasAppCustomClaimSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationSaasAppCustomClaimSource: zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.name">name</a></code> | <code>string</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.nameByIdp">nameByIdp</a></code> | <code>{[ key: string ]: string}</code> | A mapping from IdP ID to claim name. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `nameByIdp`<sup>Optional</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.nameByIdp"></a>

```typescript
public readonly nameByIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}

---

### ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions <a name="ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationSaasAppHybridAndImplicitOptions: zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint">returnAccessTokenFromAuthorizationEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the authorization endpoint will return an access token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint">returnIdTokenFromAuthorizationEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the authorization endpoint will return an id token. |

---

##### `returnAccessTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="returnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```typescript
public readonly returnAccessTokenFromAuthorizationEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the authorization endpoint will return an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#return_access_token_from_authorization_endpoint ZeroTrustAccessApplication#return_access_token_from_authorization_endpoint}

---

##### `returnIdTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="returnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint"></a>

```typescript
public readonly returnIdTokenFromAuthorizationEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the authorization endpoint will return an id token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#return_id_token_from_authorization_endpoint ZeroTrustAccessApplication#return_id_token_from_authorization_endpoint}

---

### ZeroTrustAccessApplicationSaasAppRefreshTokenOptions <a name="ZeroTrustAccessApplicationSaasAppRefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationSaasAppRefreshTokenOptions: zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions.property.lifetime">lifetime</a></code> | <code>string</code> | How long a refresh token will be valid for after creation. |

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

How long a refresh token will be valid for after creation.

Valid units are `m`, `h` and `d`. Must be longer than 1m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#lifetime ZeroTrustAccessApplication#lifetime}

---

### ZeroTrustAccessApplicationScimConfig <a name="ZeroTrustAccessApplicationScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationScimConfig: zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.idpUid">idpUid</a></code> | <code>string</code> | The UIDs of the IdP to use as the source for SCIM resources to provision to this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.remoteUri">remoteUri</a></code> | <code>string</code> | The base URI for the application's SCIM-compatible API. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.deactivateOnDelete">deactivateOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | If false, propagates DELETE requests to the target application for SCIM resources. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether SCIM provisioning is turned on for this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.mappings">mappings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings">ZeroTrustAccessApplicationScimConfigMappings</a>[]</code> | mappings block. |

---

##### `idpUid`<sup>Required</sup> <a name="idpUid" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.idpUid"></a>

```typescript
public readonly idpUid: string;
```

- *Type:* string

The UIDs of the IdP to use as the source for SCIM resources to provision to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#idp_uid ZeroTrustAccessApplication#idp_uid}

---

##### `remoteUri`<sup>Required</sup> <a name="remoteUri" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.remoteUri"></a>

```typescript
public readonly remoteUri: string;
```

- *Type:* string

The base URI for the application's SCIM-compatible API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#remote_uri ZeroTrustAccessApplication#remote_uri}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.authentication"></a>

```typescript
public readonly authentication: ZeroTrustAccessApplicationScimConfigAuthentication;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#authentication ZeroTrustAccessApplication#authentication}

---

##### `deactivateOnDelete`<sup>Optional</sup> <a name="deactivateOnDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.deactivateOnDelete"></a>

```typescript
public readonly deactivateOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If false, propagates DELETE requests to the target application for SCIM resources.

If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#deactivate_on_delete ZeroTrustAccessApplication#deactivate_on_delete}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether SCIM provisioning is turned on for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}

---

##### `mappings`<sup>Optional</sup> <a name="mappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.mappings"></a>

```typescript
public readonly mappings: IResolvable | ZeroTrustAccessApplicationScimConfigMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings">ZeroTrustAccessApplicationScimConfigMappings</a>[]

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#mappings ZeroTrustAccessApplication#mappings}

---

### ZeroTrustAccessApplicationScimConfigAuthentication <a name="ZeroTrustAccessApplicationScimConfigAuthentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationScimConfigAuthentication: zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scheme">scheme</a></code> | <code>string</code> | The authentication scheme to use when making SCIM requests to this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | URL used to generate the auth code used during token generation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientId">clientId</a></code> | <code>string</code> | Client ID used to authenticate when generating a token for authenticating with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientSecret">clientSecret</a></code> | <code>string</code> | Secret used to authenticate when generating a token for authenticating with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.password">password</a></code> | <code>string</code> | Required when using `scim_config.0.authentication.0.user`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scopes">scopes</a></code> | <code>string[]</code> | The authorization scopes to request when generating the token used to authenticate with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.token">token</a></code> | <code>string</code> | Token used to authenticate with the remote SCIM service. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | URL used to generate the token used to authenticate with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.user">user</a></code> | <code>string</code> | User name used to authenticate with the remote SCIM service. |

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

The authentication scheme to use when making SCIM requests to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#scheme ZeroTrustAccessApplication#scheme}

---

##### `authorizationUrl`<sup>Optional</sup> <a name="authorizationUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

URL used to generate the auth code used during token generation.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#authorization_url ZeroTrustAccessApplication#authorization_url}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Client ID used to authenticate when generating a token for authenticating with the remote SCIM service.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#client_id ZeroTrustAccessApplication#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Secret used to authenticate when generating a token for authenticating with the remove SCIM service.

Required when using `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#client_secret ZeroTrustAccessApplication#client_secret}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Required when using `scim_config.0.authentication.0.user`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#password ZeroTrustAccessApplication#password}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The authorization scopes to request when generating the token used to authenticate with the remove SCIM service.

Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Token used to authenticate with the remote SCIM service. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#token ZeroTrustAccessApplication#token}

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

URL used to generate the token used to authenticate with the remote SCIM service.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.client_id`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#token_url ZeroTrustAccessApplication#token_url}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

User name used to authenticate with the remote SCIM service.

Required when using `scim_config.0.authentication.0.password`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#user ZeroTrustAccessApplication#user}

---

### ZeroTrustAccessApplicationScimConfigMappings <a name="ZeroTrustAccessApplicationScimConfigMappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationScimConfigMappings: zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.schema">schema</a></code> | <code>string</code> | Which SCIM resource type this mapping applies to. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not this mapping is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.filter">filter</a></code> | <code>string</code> | A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a></code> | operations block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.strictness">strictness</a></code> | <code>string</code> | How strictly to adhere to outbound resource schemas when provisioning to this mapping. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.transformJsonata">transformJsonata</a></code> | <code>string</code> | A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application. |

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Which SCIM resource type this mapping applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#schema ZeroTrustAccessApplication#schema}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not this mapping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#filter ZeroTrustAccessApplication#filter}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.operations"></a>

```typescript
public readonly operations: ZeroTrustAccessApplicationScimConfigMappingsOperations;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#operations ZeroTrustAccessApplication#operations}

---

##### `strictness`<sup>Optional</sup> <a name="strictness" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.strictness"></a>

```typescript
public readonly strictness: string;
```

- *Type:* string

How strictly to adhere to outbound resource schemas when provisioning to this mapping.

"strict" will remove unknown values when provisioning, while "passthrough" will pass unknown values to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#strictness ZeroTrustAccessApplication#strictness}

---

##### `transformJsonata`<sup>Optional</sup> <a name="transformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.transformJsonata"></a>

```typescript
public readonly transformJsonata: string;
```

- *Type:* string

A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#transform_jsonata ZeroTrustAccessApplication#transform_jsonata}

---

### ZeroTrustAccessApplicationScimConfigMappingsOperations <a name="ZeroTrustAccessApplicationScimConfigMappingsOperations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationScimConfigMappingsOperations: zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.create">create</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not this mapping applies to create (POST) operations. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.delete">delete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not this mapping applies to DELETE operations. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not this mapping applies to update (PATCH/PUT) operations. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.create"></a>

```typescript
public readonly create: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not this mapping applies to create (POST) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#create ZeroTrustAccessApplication#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not this mapping applies to DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#delete ZeroTrustAccessApplication#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not this mapping applies to update (PATCH/PUT) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#update ZeroTrustAccessApplication#update}

---

### ZeroTrustAccessApplicationTargetCriteria <a name="ZeroTrustAccessApplicationTargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationTargetCriteria: zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.port">port</a></code> | <code>number</code> | The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.protocol">protocol</a></code> | <code>string</code> | The communication protocol your application secures. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.targetAttributes">targetAttributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes">ZeroTrustAccessApplicationTargetCriteriaTargetAttributes</a>[]</code> | target_attributes block. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#port ZeroTrustAccessApplication#port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The communication protocol your application secures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#protocol ZeroTrustAccessApplication#protocol}

---

##### `targetAttributes`<sup>Required</sup> <a name="targetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.targetAttributes"></a>

```typescript
public readonly targetAttributes: IResolvable | ZeroTrustAccessApplicationTargetCriteriaTargetAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes">ZeroTrustAccessApplicationTargetCriteriaTargetAttributes</a>[]

target_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#target_attributes ZeroTrustAccessApplication#target_attributes}

---

### ZeroTrustAccessApplicationTargetCriteriaTargetAttributes <a name="ZeroTrustAccessApplicationTargetCriteriaTargetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

const zeroTrustAccessApplicationTargetCriteriaTargetAttributes: zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.name">name</a></code> | <code>string</code> | The key of the attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.values">values</a></code> | <code>string[]</code> | The values of the attribute. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The values of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_access_application#values ZeroTrustAccessApplication#values}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessApplicationCorsHeadersList <a name="ZeroTrustAccessApplicationCorsHeadersList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.get"></a>

```typescript
public get(index: number): ZeroTrustAccessApplicationCorsHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders">ZeroTrustAccessApplicationCorsHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationCorsHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders">ZeroTrustAccessApplicationCorsHeaders</a>[]

---


### ZeroTrustAccessApplicationCorsHeadersOutputReference <a name="ZeroTrustAccessApplicationCorsHeadersOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders">resetAllowAllHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllMethods">resetAllowAllMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins">resetAllowAllOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedMethods">resetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllHeaders` <a name="resetAllowAllHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders"></a>

```typescript
public resetAllowAllHeaders(): void
```

##### `resetAllowAllMethods` <a name="resetAllowAllMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllMethods"></a>

```typescript
public resetAllowAllMethods(): void
```

##### `resetAllowAllOrigins` <a name="resetAllowAllOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins"></a>

```typescript
public resetAllowAllOrigins(): void
```

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowCredentials"></a>

```typescript
public resetAllowCredentials(): void
```

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedHeaders"></a>

```typescript
public resetAllowedHeaders(): void
```

##### `resetAllowedMethods` <a name="resetAllowedMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedMethods"></a>

```typescript
public resetAllowedMethods(): void
```

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedOrigins"></a>

```typescript
public resetAllowedOrigins(): void
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetMaxAge"></a>

```typescript
public resetMaxAge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput">allowAllHeadersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput">allowAllMethodsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput">allowAllOriginsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeaders">allowAllHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethods">allowAllMethods</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOrigins">allowAllOrigins</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders">ZeroTrustAccessApplicationCorsHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAllHeadersInput`<sup>Optional</sup> <a name="allowAllHeadersInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput"></a>

```typescript
public readonly allowAllHeadersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAllMethodsInput`<sup>Optional</sup> <a name="allowAllMethodsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput"></a>

```typescript
public readonly allowAllMethodsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAllOriginsInput`<sup>Optional</sup> <a name="allowAllOriginsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput"></a>

```typescript
public readonly allowAllOriginsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput"></a>

```typescript
public readonly allowCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: number;
```

- *Type:* number

---

##### `allowAllHeaders`<sup>Required</sup> <a name="allowAllHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeaders"></a>

```typescript
public readonly allowAllHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAllMethods`<sup>Required</sup> <a name="allowAllMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethods"></a>

```typescript
public readonly allowAllMethods: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAllOrigins`<sup>Required</sup> <a name="allowAllOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOrigins"></a>

```typescript
public readonly allowAllOrigins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationCorsHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders">ZeroTrustAccessApplicationCorsHeaders</a>

---


### ZeroTrustAccessApplicationDestinationsList <a name="ZeroTrustAccessApplicationDestinationsList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.get"></a>

```typescript
public get(index: number): ZeroTrustAccessApplicationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations">ZeroTrustAccessApplicationDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations">ZeroTrustAccessApplicationDestinations</a>[]

---


### ZeroTrustAccessApplicationDestinationsOutputReference <a name="ZeroTrustAccessApplicationDestinationsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations">ZeroTrustAccessApplicationDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations">ZeroTrustAccessApplicationDestinations</a>

---


### ZeroTrustAccessApplicationFooterLinksList <a name="ZeroTrustAccessApplicationFooterLinksList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.get"></a>

```typescript
public get(index: number): ZeroTrustAccessApplicationFooterLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks">ZeroTrustAccessApplicationFooterLinks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationFooterLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks">ZeroTrustAccessApplicationFooterLinks</a>[]

---


### ZeroTrustAccessApplicationFooterLinksOutputReference <a name="ZeroTrustAccessApplicationFooterLinksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks">ZeroTrustAccessApplicationFooterLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationFooterLinks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks">ZeroTrustAccessApplicationFooterLinks</a>

---


### ZeroTrustAccessApplicationLandingPageDesignOutputReference <a name="ZeroTrustAccessApplicationLandingPageDesignOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetButtonColor">resetButtonColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetButtonTextColor">resetButtonTextColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetImageUrl">resetImageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonColor` <a name="resetButtonColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetButtonColor"></a>

```typescript
public resetButtonColor(): void
```

##### `resetButtonTextColor` <a name="resetButtonTextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetButtonTextColor"></a>

```typescript
public resetButtonTextColor(): void
```

##### `resetImageUrl` <a name="resetImageUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetImageUrl"></a>

```typescript
public resetImageUrl(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColorInput">buttonColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput">buttonTextColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrlInput">imageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColor">buttonColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColor">buttonTextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonColorInput`<sup>Optional</sup> <a name="buttonColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColorInput"></a>

```typescript
public readonly buttonColorInput: string;
```

- *Type:* string

---

##### `buttonTextColorInput`<sup>Optional</sup> <a name="buttonTextColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput"></a>

```typescript
public readonly buttonTextColorInput: string;
```

- *Type:* string

---

##### `imageUrlInput`<sup>Optional</sup> <a name="imageUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrlInput"></a>

```typescript
public readonly imageUrlInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `buttonColor`<sup>Required</sup> <a name="buttonColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColor"></a>

```typescript
public readonly buttonColor: string;
```

- *Type:* string

---

##### `buttonTextColor`<sup>Required</sup> <a name="buttonTextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColor"></a>

```typescript
public readonly buttonTextColor: string;
```

- *Type:* string

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustAccessApplicationLandingPageDesign;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

---


### ZeroTrustAccessApplicationSaasAppCustomAttributeList <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.get"></a>

```typescript
public get(index: number): ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute">ZeroTrustAccessApplicationSaasAppCustomAttribute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationSaasAppCustomAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute">ZeroTrustAccessApplicationSaasAppCustomAttribute</a>[]

---


### ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetNameFormat">resetNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.putSource"></a>

```typescript
public putSource(value: ZeroTrustAccessApplicationSaasAppCustomAttributeSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

---

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetFriendlyName"></a>

```typescript
public resetFriendlyName(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameFormat` <a name="resetNameFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetNameFormat"></a>

```typescript
public resetNameFormat(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput">friendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput">nameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat">nameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute">ZeroTrustAccessApplicationSaasAppCustomAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.source"></a>

```typescript
public readonly source: ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference</a>

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput"></a>

```typescript
public readonly friendlyNameInput: string;
```

- *Type:* string

---

##### `nameFormatInput`<sup>Optional</sup> <a name="nameFormatInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput"></a>

```typescript
public readonly nameFormatInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: ZeroTrustAccessApplicationSaasAppCustomAttributeSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameFormat`<sup>Required</sup> <a name="nameFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat"></a>

```typescript
public readonly nameFormat: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationSaasAppCustomAttribute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute">ZeroTrustAccessApplicationSaasAppCustomAttribute</a>

---


### ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resetNameByIdp">resetNameByIdp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNameByIdp` <a name="resetNameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resetNameByIdp"></a>

```typescript
public resetNameByIdp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput">nameByIdpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp">nameByIdp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameByIdpInput`<sup>Optional</sup> <a name="nameByIdpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput"></a>

```typescript
public readonly nameByIdpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameByIdp`<sup>Required</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp"></a>

```typescript
public readonly nameByIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustAccessApplicationSaasAppCustomAttributeSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

---


### ZeroTrustAccessApplicationSaasAppCustomClaimList <a name="ZeroTrustAccessApplicationSaasAppCustomClaimList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.get"></a>

```typescript
public get(index: number): ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim">ZeroTrustAccessApplicationSaasAppCustomClaim</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationSaasAppCustomClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim">ZeroTrustAccessApplicationSaasAppCustomClaim</a>[]

---


### ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.putSource"></a>

```typescript
public putSource(value: ZeroTrustAccessApplicationSaasAppCustomClaimSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim">ZeroTrustAccessApplicationSaasAppCustomClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.source"></a>

```typescript
public readonly source: ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: ZeroTrustAccessApplicationSaasAppCustomClaimSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationSaasAppCustomClaim;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim">ZeroTrustAccessApplicationSaasAppCustomClaim</a>

---


### ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resetNameByIdp">resetNameByIdp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNameByIdp` <a name="resetNameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resetNameByIdp"></a>

```typescript
public resetNameByIdp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput">nameByIdpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp">nameByIdp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameByIdpInput`<sup>Optional</sup> <a name="nameByIdpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput"></a>

```typescript
public readonly nameByIdpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameByIdp`<sup>Required</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp"></a>

```typescript
public readonly nameByIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustAccessApplicationSaasAppCustomClaimSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

---


### ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference <a name="ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnAccessTokenFromAuthorizationEndpoint">resetReturnAccessTokenFromAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnIdTokenFromAuthorizationEndpoint">resetReturnIdTokenFromAuthorizationEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReturnAccessTokenFromAuthorizationEndpoint` <a name="resetReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnAccessTokenFromAuthorizationEndpoint"></a>

```typescript
public resetReturnAccessTokenFromAuthorizationEndpoint(): void
```

##### `resetReturnIdTokenFromAuthorizationEndpoint` <a name="resetReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnIdTokenFromAuthorizationEndpoint"></a>

```typescript
public resetReturnIdTokenFromAuthorizationEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput">returnAccessTokenFromAuthorizationEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput">returnIdTokenFromAuthorizationEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint">returnAccessTokenFromAuthorizationEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint">returnIdTokenFromAuthorizationEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `returnAccessTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="returnAccessTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput"></a>

```typescript
public readonly returnAccessTokenFromAuthorizationEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `returnIdTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="returnIdTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput"></a>

```typescript
public readonly returnIdTokenFromAuthorizationEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `returnAccessTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="returnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```typescript
public readonly returnAccessTokenFromAuthorizationEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `returnIdTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="returnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint"></a>

```typescript
public readonly returnIdTokenFromAuthorizationEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

---


### ZeroTrustAccessApplicationSaasAppOutputReference <a name="ZeroTrustAccessApplicationSaasAppOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomAttribute">putCustomAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomClaim">putCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions">putHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putRefreshTokenOptions">putRefreshTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAccessTokenLifetime">resetAccessTokenLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAllowPkceWithoutClientSecret">resetAllowPkceWithoutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAppLauncherUrl">resetAppLauncherUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetConsumerServiceUrl">resetConsumerServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetCustomAttribute">resetCustomAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetCustomClaim">resetCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetDefaultRelayState">resetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetGrantTypes">resetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetGroupFilterRegex">resetGroupFilterRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetHybridAndImplicitOptions">resetHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetNameIdFormat">resetNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetNameIdTransformJsonata">resetNameIdTransformJsonata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetRefreshTokenOptions">resetRefreshTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetSamlAttributeTransformJsonata">resetSamlAttributeTransformJsonata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetSpEntityId">resetSpEntityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomAttribute` <a name="putCustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomAttribute"></a>

```typescript
public putCustomAttribute(value: IResolvable | ZeroTrustAccessApplicationSaasAppCustomAttribute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomAttribute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute">ZeroTrustAccessApplicationSaasAppCustomAttribute</a>[]

---

##### `putCustomClaim` <a name="putCustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomClaim"></a>

```typescript
public putCustomClaim(value: IResolvable | ZeroTrustAccessApplicationSaasAppCustomClaim[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomClaim.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim">ZeroTrustAccessApplicationSaasAppCustomClaim</a>[]

---

##### `putHybridAndImplicitOptions` <a name="putHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions"></a>

```typescript
public putHybridAndImplicitOptions(value: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `putRefreshTokenOptions` <a name="putRefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putRefreshTokenOptions"></a>

```typescript
public putRefreshTokenOptions(value: IResolvable | ZeroTrustAccessApplicationSaasAppRefreshTokenOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putRefreshTokenOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions">ZeroTrustAccessApplicationSaasAppRefreshTokenOptions</a>[]

---

##### `resetAccessTokenLifetime` <a name="resetAccessTokenLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAccessTokenLifetime"></a>

```typescript
public resetAccessTokenLifetime(): void
```

##### `resetAllowPkceWithoutClientSecret` <a name="resetAllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAllowPkceWithoutClientSecret"></a>

```typescript
public resetAllowPkceWithoutClientSecret(): void
```

##### `resetAppLauncherUrl` <a name="resetAppLauncherUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAppLauncherUrl"></a>

```typescript
public resetAppLauncherUrl(): void
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetConsumerServiceUrl` <a name="resetConsumerServiceUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetConsumerServiceUrl"></a>

```typescript
public resetConsumerServiceUrl(): void
```

##### `resetCustomAttribute` <a name="resetCustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetCustomAttribute"></a>

```typescript
public resetCustomAttribute(): void
```

##### `resetCustomClaim` <a name="resetCustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetCustomClaim"></a>

```typescript
public resetCustomClaim(): void
```

##### `resetDefaultRelayState` <a name="resetDefaultRelayState" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetDefaultRelayState"></a>

```typescript
public resetDefaultRelayState(): void
```

##### `resetGrantTypes` <a name="resetGrantTypes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetGrantTypes"></a>

```typescript
public resetGrantTypes(): void
```

##### `resetGroupFilterRegex` <a name="resetGroupFilterRegex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetGroupFilterRegex"></a>

```typescript
public resetGroupFilterRegex(): void
```

##### `resetHybridAndImplicitOptions` <a name="resetHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetHybridAndImplicitOptions"></a>

```typescript
public resetHybridAndImplicitOptions(): void
```

##### `resetNameIdFormat` <a name="resetNameIdFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetNameIdFormat"></a>

```typescript
public resetNameIdFormat(): void
```

##### `resetNameIdTransformJsonata` <a name="resetNameIdTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetNameIdTransformJsonata"></a>

```typescript
public resetNameIdTransformJsonata(): void
```

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetRedirectUris"></a>

```typescript
public resetRedirectUris(): void
```

##### `resetRefreshTokenOptions` <a name="resetRefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetRefreshTokenOptions"></a>

```typescript
public resetRefreshTokenOptions(): void
```

##### `resetSamlAttributeTransformJsonata` <a name="resetSamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetSamlAttributeTransformJsonata"></a>

```typescript
public resetSamlAttributeTransformJsonata(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSpEntityId` <a name="resetSpEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetSpEntityId"></a>

```typescript
public resetSpEntityId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttribute">customAttribute</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList">ZeroTrustAccessApplicationSaasAppCustomAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaim">customClaim</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList">ZeroTrustAccessApplicationSaasAppCustomClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions">hybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.idpEntityId">idpEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptions">refreshTokenOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList">ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.ssoEndpoint">ssoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput">accessTokenLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput">allowPkceWithoutClientSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrlInput">appLauncherUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput">consumerServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttributeInput">customAttributeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute">ZeroTrustAccessApplicationSaasAppCustomAttribute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaimInput">customClaimInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim">ZeroTrustAccessApplicationSaasAppCustomClaim</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayStateInput">defaultRelayStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypesInput">grantTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegexInput">groupFilterRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput">hybridAndImplicitOptionsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormatInput">nameIdFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput">nameIdTransformJsonataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUrisInput">redirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput">refreshTokenOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions">ZeroTrustAccessApplicationSaasAppRefreshTokenOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput">samlAttributeTransformJsonataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityIdInput">spEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetime">accessTokenLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret">allowPkceWithoutClientSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrl">appLauncherUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrl">consumerServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayState">defaultRelayState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegex">groupFilterRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormat">nameIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata">nameIdTransformJsonata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata">samlAttributeTransformJsonata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityId">spEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `customAttribute`<sup>Required</sup> <a name="customAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttribute"></a>

```typescript
public readonly customAttribute: ZeroTrustAccessApplicationSaasAppCustomAttributeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList">ZeroTrustAccessApplicationSaasAppCustomAttributeList</a>

---

##### `customClaim`<sup>Required</sup> <a name="customClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaim"></a>

```typescript
public readonly customClaim: ZeroTrustAccessApplicationSaasAppCustomClaimList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList">ZeroTrustAccessApplicationSaasAppCustomClaimList</a>

---

##### `hybridAndImplicitOptions`<sup>Required</sup> <a name="hybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions"></a>

```typescript
public readonly hybridAndImplicitOptions: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a>

---

##### `idpEntityId`<sup>Required</sup> <a name="idpEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.idpEntityId"></a>

```typescript
public readonly idpEntityId: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `refreshTokenOptions`<sup>Required</sup> <a name="refreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptions"></a>

```typescript
public readonly refreshTokenOptions: ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList">ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList</a>

---

##### `ssoEndpoint`<sup>Required</sup> <a name="ssoEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.ssoEndpoint"></a>

```typescript
public readonly ssoEndpoint: string;
```

- *Type:* string

---

##### `accessTokenLifetimeInput`<sup>Optional</sup> <a name="accessTokenLifetimeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput"></a>

```typescript
public readonly accessTokenLifetimeInput: string;
```

- *Type:* string

---

##### `allowPkceWithoutClientSecretInput`<sup>Optional</sup> <a name="allowPkceWithoutClientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput"></a>

```typescript
public readonly allowPkceWithoutClientSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appLauncherUrlInput`<sup>Optional</sup> <a name="appLauncherUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrlInput"></a>

```typescript
public readonly appLauncherUrlInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `consumerServiceUrlInput`<sup>Optional</sup> <a name="consumerServiceUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput"></a>

```typescript
public readonly consumerServiceUrlInput: string;
```

- *Type:* string

---

##### `customAttributeInput`<sup>Optional</sup> <a name="customAttributeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttributeInput"></a>

```typescript
public readonly customAttributeInput: IResolvable | ZeroTrustAccessApplicationSaasAppCustomAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute">ZeroTrustAccessApplicationSaasAppCustomAttribute</a>[]

---

##### `customClaimInput`<sup>Optional</sup> <a name="customClaimInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaimInput"></a>

```typescript
public readonly customClaimInput: IResolvable | ZeroTrustAccessApplicationSaasAppCustomClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim">ZeroTrustAccessApplicationSaasAppCustomClaim</a>[]

---

##### `defaultRelayStateInput`<sup>Optional</sup> <a name="defaultRelayStateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayStateInput"></a>

```typescript
public readonly defaultRelayStateInput: string;
```

- *Type:* string

---

##### `grantTypesInput`<sup>Optional</sup> <a name="grantTypesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypesInput"></a>

```typescript
public readonly grantTypesInput: string[];
```

- *Type:* string[]

---

##### `groupFilterRegexInput`<sup>Optional</sup> <a name="groupFilterRegexInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegexInput"></a>

```typescript
public readonly groupFilterRegexInput: string;
```

- *Type:* string

---

##### `hybridAndImplicitOptionsInput`<sup>Optional</sup> <a name="hybridAndImplicitOptionsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput"></a>

```typescript
public readonly hybridAndImplicitOptionsInput: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `nameIdFormatInput`<sup>Optional</sup> <a name="nameIdFormatInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormatInput"></a>

```typescript
public readonly nameIdFormatInput: string;
```

- *Type:* string

---

##### `nameIdTransformJsonataInput`<sup>Optional</sup> <a name="nameIdTransformJsonataInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput"></a>

```typescript
public readonly nameIdTransformJsonataInput: string;
```

- *Type:* string

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUrisInput"></a>

```typescript
public readonly redirectUrisInput: string[];
```

- *Type:* string[]

---

##### `refreshTokenOptionsInput`<sup>Optional</sup> <a name="refreshTokenOptionsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput"></a>

```typescript
public readonly refreshTokenOptionsInput: IResolvable | ZeroTrustAccessApplicationSaasAppRefreshTokenOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions">ZeroTrustAccessApplicationSaasAppRefreshTokenOptions</a>[]

---

##### `samlAttributeTransformJsonataInput`<sup>Optional</sup> <a name="samlAttributeTransformJsonataInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput"></a>

```typescript
public readonly samlAttributeTransformJsonataInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `spEntityIdInput`<sup>Optional</sup> <a name="spEntityIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityIdInput"></a>

```typescript
public readonly spEntityIdInput: string;
```

- *Type:* string

---

##### `accessTokenLifetime`<sup>Required</sup> <a name="accessTokenLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetime"></a>

```typescript
public readonly accessTokenLifetime: string;
```

- *Type:* string

---

##### `allowPkceWithoutClientSecret`<sup>Required</sup> <a name="allowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret"></a>

```typescript
public readonly allowPkceWithoutClientSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appLauncherUrl`<sup>Required</sup> <a name="appLauncherUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrl"></a>

```typescript
public readonly appLauncherUrl: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `consumerServiceUrl`<sup>Required</sup> <a name="consumerServiceUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrl"></a>

```typescript
public readonly consumerServiceUrl: string;
```

- *Type:* string

---

##### `defaultRelayState`<sup>Required</sup> <a name="defaultRelayState" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayState"></a>

```typescript
public readonly defaultRelayState: string;
```

- *Type:* string

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

---

##### `groupFilterRegex`<sup>Required</sup> <a name="groupFilterRegex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegex"></a>

```typescript
public readonly groupFilterRegex: string;
```

- *Type:* string

---

##### `nameIdFormat`<sup>Required</sup> <a name="nameIdFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormat"></a>

```typescript
public readonly nameIdFormat: string;
```

- *Type:* string

---

##### `nameIdTransformJsonata`<sup>Required</sup> <a name="nameIdTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata"></a>

```typescript
public readonly nameIdTransformJsonata: string;
```

- *Type:* string

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `samlAttributeTransformJsonata`<sup>Required</sup> <a name="samlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata"></a>

```typescript
public readonly samlAttributeTransformJsonata: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `spEntityId`<sup>Required</sup> <a name="spEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityId"></a>

```typescript
public readonly spEntityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustAccessApplicationSaasApp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

---


### ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList <a name="ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.get"></a>

```typescript
public get(index: number): ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions">ZeroTrustAccessApplicationSaasAppRefreshTokenOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationSaasAppRefreshTokenOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions">ZeroTrustAccessApplicationSaasAppRefreshTokenOptions</a>[]

---


### ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference <a name="ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resetLifetime"></a>

```typescript
public resetLifetime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime">lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions">ZeroTrustAccessApplicationSaasAppRefreshTokenOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: string;
```

- *Type:* string

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationSaasAppRefreshTokenOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions">ZeroTrustAccessApplicationSaasAppRefreshTokenOptions</a>

---


### ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference <a name="ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetAuthorizationUrl">resetAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationUrl` <a name="resetAuthorizationUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetAuthorizationUrl"></a>

```typescript
public resetAuthorizationUrl(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput">authorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationUrlInput`<sup>Optional</sup> <a name="authorizationUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput"></a>

```typescript
public readonly authorizationUrlInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustAccessApplicationScimConfigAuthentication;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a>

---


### ZeroTrustAccessApplicationScimConfigMappingsList <a name="ZeroTrustAccessApplicationScimConfigMappingsList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.get"></a>

```typescript
public get(index: number): ZeroTrustAccessApplicationScimConfigMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings">ZeroTrustAccessApplicationScimConfigMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationScimConfigMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings">ZeroTrustAccessApplicationScimConfigMappings</a>[]

---


### ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference <a name="ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput">createInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput">deleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput">updateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.create">create</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.delete">delete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.create"></a>

```typescript
public readonly create: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustAccessApplicationScimConfigMappingsOperations;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

---


### ZeroTrustAccessApplicationScimConfigMappingsOutputReference <a name="ZeroTrustAccessApplicationScimConfigMappingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetStrictness">resetStrictness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata">resetTransformJsonata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.putOperations"></a>

```typescript
public putOperations(value: ZeroTrustAccessApplicationScimConfigMappingsOperations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.putOperations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetStrictness` <a name="resetStrictness" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetStrictness"></a>

```typescript
public resetStrictness(): void
```

##### `resetTransformJsonata` <a name="resetTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata"></a>

```typescript
public resetTransformJsonata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference">ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operationsInput">operationsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.strictnessInput">strictnessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput">transformJsonataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.strictness">strictness</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonata">transformJsonata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings">ZeroTrustAccessApplicationScimConfigMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operations"></a>

```typescript
public readonly operations: ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference">ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operationsInput"></a>

```typescript
public readonly operationsInput: ZeroTrustAccessApplicationScimConfigMappingsOperations;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `strictnessInput`<sup>Optional</sup> <a name="strictnessInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.strictnessInput"></a>

```typescript
public readonly strictnessInput: string;
```

- *Type:* string

---

##### `transformJsonataInput`<sup>Optional</sup> <a name="transformJsonataInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput"></a>

```typescript
public readonly transformJsonataInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `strictness`<sup>Required</sup> <a name="strictness" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.strictness"></a>

```typescript
public readonly strictness: string;
```

- *Type:* string

---

##### `transformJsonata`<sup>Required</sup> <a name="transformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonata"></a>

```typescript
public readonly transformJsonata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationScimConfigMappings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings">ZeroTrustAccessApplicationScimConfigMappings</a>

---


### ZeroTrustAccessApplicationScimConfigOutputReference <a name="ZeroTrustAccessApplicationScimConfigOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putMappings">putMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetDeactivateOnDelete">resetDeactivateOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetMappings">resetMappings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: ZeroTrustAccessApplicationScimConfigAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a>

---

##### `putMappings` <a name="putMappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putMappings"></a>

```typescript
public putMappings(value: IResolvable | ZeroTrustAccessApplicationScimConfigMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings">ZeroTrustAccessApplicationScimConfigMappings</a>[]

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetDeactivateOnDelete` <a name="resetDeactivateOnDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetDeactivateOnDelete"></a>

```typescript
public resetDeactivateOnDelete(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMappings` <a name="resetMappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetMappings"></a>

```typescript
public resetMappings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference">ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappings">mappings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList">ZeroTrustAccessApplicationScimConfigMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput">deactivateOnDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUidInput">idpUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappingsInput">mappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings">ZeroTrustAccessApplicationScimConfigMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUriInput">remoteUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDelete">deactivateOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUid">idpUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUri">remoteUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authentication"></a>

```typescript
public readonly authentication: ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference">ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference</a>

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappings"></a>

```typescript
public readonly mappings: ZeroTrustAccessApplicationScimConfigMappingsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList">ZeroTrustAccessApplicationScimConfigMappingsList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: ZeroTrustAccessApplicationScimConfigAuthentication;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a>

---

##### `deactivateOnDeleteInput`<sup>Optional</sup> <a name="deactivateOnDeleteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput"></a>

```typescript
public readonly deactivateOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idpUidInput`<sup>Optional</sup> <a name="idpUidInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUidInput"></a>

```typescript
public readonly idpUidInput: string;
```

- *Type:* string

---

##### `mappingsInput`<sup>Optional</sup> <a name="mappingsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappingsInput"></a>

```typescript
public readonly mappingsInput: IResolvable | ZeroTrustAccessApplicationScimConfigMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings">ZeroTrustAccessApplicationScimConfigMappings</a>[]

---

##### `remoteUriInput`<sup>Optional</sup> <a name="remoteUriInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUriInput"></a>

```typescript
public readonly remoteUriInput: string;
```

- *Type:* string

---

##### `deactivateOnDelete`<sup>Required</sup> <a name="deactivateOnDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDelete"></a>

```typescript
public readonly deactivateOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idpUid`<sup>Required</sup> <a name="idpUid" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUid"></a>

```typescript
public readonly idpUid: string;
```

- *Type:* string

---

##### `remoteUri`<sup>Required</sup> <a name="remoteUri" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUri"></a>

```typescript
public readonly remoteUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustAccessApplicationScimConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

---


### ZeroTrustAccessApplicationTargetCriteriaList <a name="ZeroTrustAccessApplicationTargetCriteriaList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.get"></a>

```typescript
public get(index: number): ZeroTrustAccessApplicationTargetCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria">ZeroTrustAccessApplicationTargetCriteria</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationTargetCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria">ZeroTrustAccessApplicationTargetCriteria</a>[]

---


### ZeroTrustAccessApplicationTargetCriteriaOutputReference <a name="ZeroTrustAccessApplicationTargetCriteriaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.putTargetAttributes">putTargetAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetAttributes` <a name="putTargetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.putTargetAttributes"></a>

```typescript
public putTargetAttributes(value: IResolvable | ZeroTrustAccessApplicationTargetCriteriaTargetAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.putTargetAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes">ZeroTrustAccessApplicationTargetCriteriaTargetAttributes</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributes">targetAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList">ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput">targetAttributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes">ZeroTrustAccessApplicationTargetCriteriaTargetAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria">ZeroTrustAccessApplicationTargetCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetAttributes`<sup>Required</sup> <a name="targetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributes"></a>

```typescript
public readonly targetAttributes: ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList">ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `targetAttributesInput`<sup>Optional</sup> <a name="targetAttributesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput"></a>

```typescript
public readonly targetAttributesInput: IResolvable | ZeroTrustAccessApplicationTargetCriteriaTargetAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes">ZeroTrustAccessApplicationTargetCriteriaTargetAttributes</a>[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationTargetCriteria;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria">ZeroTrustAccessApplicationTargetCriteria</a>

---


### ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList <a name="ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.get"></a>

```typescript
public get(index: number): ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes">ZeroTrustAccessApplicationTargetCriteriaTargetAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationTargetCriteriaTargetAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes">ZeroTrustAccessApplicationTargetCriteriaTargetAttributes</a>[]

---


### ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference <a name="ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessApplication } from '@cdktf/provider-cloudflare'

new zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes">ZeroTrustAccessApplicationTargetCriteriaTargetAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessApplicationTargetCriteriaTargetAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes">ZeroTrustAccessApplicationTargetCriteriaTargetAttributes</a>

---



